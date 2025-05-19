//To be used only when using ES6 module (with a server or github page)
//import { predefinedGraphs } from "./predefinedGraphs.js";
//console.log(JSON.stringify(predefinedGraphs));
//

function safeStringifyElement(element) {
    // Get primitive data properties only
    const data = element.data();
    const safeData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        if (value === null || (typeof value !== 'object' && !Array.isArray(value))) {
          safeData[key] = value;
        }
      }
    }
  
    // Get position (x, y)
    const position = element.position();
  
    // Define visual style properties to include
    const styleProps = [
      "background-color", "border-color", "border-width",
      "label", "font-size", "color",
      "width", "height",
      "line-color", "line-style",
      "text-valign", "text-halign",
      "display", "visibility",
      "shape", "opacity"
    ];
  
    // Extract rendered styles safely
    const style = {};
    styleProps.forEach(prop => {
      try {
        style[prop] = element.renderedStyle(prop);
      } catch {
        style[prop] = null; // fallback if property not available
      }
    });
  
    // Combine all parts
    const combined = {
      data: safeData,
      position: position,
      style: style
    };
  
    // Return pretty JSON string
    return JSON.stringify(combined, null, 2);
  }
  

document.addEventListener("DOMContentLoaded", function () {
    const actions = document.querySelectorAll('.clickable-action');

    actions.forEach(function (action) {
        action.style.color = '#007bff';
        action.style.fontWeight = 'bold';
        action.style.cursor = 'pointer';
        action.style.textDecoration = 'underline';
    });

    // Add hover styles programmatically
    actions.forEach(function (action) {
        action.addEventListener('mouseover', function () {
            action.style.color = '#0056b3';
            action.style.textDecoration = 'none';
        });

        action.addEventListener('mouseout', function () {
            action.style.color = '#007bff';
            action.style.textDecoration = 'underline';
        });
    });
});


var groupEdges = true;
var allowNestedEdgeCollapse = true;
function getEdgeOptions() {
    var groupEdgesOfSameTypeOnCollapse = groupEdges;
    var allowNestedEdgeCollapse = allowNestedEdgeCollapse;

    return { groupEdgesOfSameTypeOnCollapse: groupEdgesOfSameTypeOnCollapse, allowNestedEdgeCollapse: allowNestedEdgeCollapse };
}

function handleSlideFullyDisplayed() {
    // vérifier que le slide actuel doit ou non afficher un graphe
    let presentSlide = Reveal.getCurrentSlide();
    console.log(presentSlide)
    let dataGraph = presentSlide ? presentSlide.getAttribute('data-graph') : null;
    //console.log("toto")
    if (dataGraph) {
        // effacer tous les cy containers du document
        document.querySelectorAll('#cy-container').forEach(element => element.remove());
        // vérifier que le slide contient content-zone et image-zone ou créer
        let contentZone = presentSlide.querySelector(".content-zone");
        if (!contentZone) {
            console.log("Missing content-zone as the graph " + dataGraph + "is to be displayed")
            return; // Do nothing if no content zone exists in the current slide
        }
        let imageZone = contentZone.querySelector(".image-zone");

        // If no image zone, exit
        if (!imageZone) {
            console.log("Missing image-zone as the graph " + dataGraph + "is to be displayed")
            //creation of the image zone
            contentZone.appendChild(imageZone); // Insert into the image zone
            console.log("Image zone created")
        }
        // Ensure image zone has explicit size
        imageZone.style.position = "relative"; // Required for absolute positioning of the Cytoscape container
        imageZone.style.width = "100%"; // Full width
        imageZone.style.height = "500px"; // Set a fixed height for the image zone (can be adjusted based on your layout)

        // Create the container dynamically
        var cyContainer = document.createElement("div");
        cyContainer.id = "cy-container";
        cyContainer.style.width = "100%";  // Ensure the container takes full width
        cyContainer.style.height = "100%"; // Ensure the container takes full height
        imageZone.appendChild(cyContainer); // Insert into the image zone
        console.log(dataGraph)
        displayGraph(cyContainer, dataGraph); // Ensure the graph is displayed
        console.log("titi")
        // Ensure canvas elements are positioned correctly
        if (cyContainer) {
            console.log("tutu")
            var canvases = cyContainer.querySelectorAll('canvas');
            canvases.forEach(function (canvas) {
                canvas.style.position = 'absolute';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.width = "100%";
                canvas.style.height = "100%";
            });

            const canvasSelectors = [
                'layer0-selectbox',
                'layer1-drag',
                'layer2-node'
            ];

            // Function to apply styles to canvas elements
            const applyCanvasStyles = () => {
                canvasSelectors.forEach(selector => {

                    let canvas = document.querySelector(`canvas[data-id="${selector}"]`);
                    if (canvas) {
                        if (
                            canvas.style.position !== 'absolute' ||
                            canvas.style.top !== '0' ||
                            canvas.style.left !== '0' ||
                            canvas.style.width !== '100%' ||
                            canvas.style.height !== '100%'
                        ) {
                            canvas.style.position = 'absolute';
                            canvas.style.top = '0';
                            canvas.style.left = '0';
                            canvas.style.width = '100%';
                            canvas.style.height = '100%';
                        }
                    }
                });
            };
            cy.resize();
        }
    }
}
// Attacher l'événement 'slidetransitionend' pour réagir après chaque transition de slide
Reveal.on('slidetransitionend', handleSlideFullyDisplayed);


function displayGraph(cyContainer, dataGraph) {

    // Initialize Cytoscape
    cy = cytoscape({
        container: cyContainer,
        elements: predefinedGraphs[dataGraph],
        style: OntologyViewerStyle
    });
    cy.on('click', 'node, edge', function (event) {
        var element = event.target;

        // Get data attributes
        const data = element.data();
        const classesString = element.classes(); // e.g. "annotationproperty someOtherClass"
        const jsonClasses = safeStringifyElement; 


        // Define style properties you want to capture
        const styleProperties = [
            "background-color",
            "border-color",
            "border-width",
            "label",
            "font-size",
            "color",
            "width",
            "height",
            "line-color",
            "line-style",
            "text-valign",
            "text-halign"
        ];

        // Build a style object with property-value pairs
        const style = {};
        styleProperties.forEach(prop => {
            style[prop] = element.style(prop);
        });

        // Combine data and style
        const combined = {
            data: data,
            type: jsonClasses,
            style: style
        };

        // Display JSON in the info-panel div
        const infoPanel = document.getElementById('info-panel');
       
        const safeData = safeStringifyElement(event.target);
        infoPanel.textContent = `Classes: ${classesString}\n\nData:\n${safeData}`;
        if (infoPanel) {
            infoPanel.textContent = `Classes: ${classesString}\n\nData:\n${safeData}`;
        
        }
    });


    cy.on('dblclick', 'edge', function (event) {
        let edge = event.target;

        api.expandEdges(edge, getEdgeOptions());
    });
    cy.container().addEventListener('dblclick', function (event) {
        // Check if the double-click is outside of any node or edge
        // if (originalEvent.shiftKey) {
        api.collapseAllEdges(getEdgeOptions())
        // }
        // else { api.expandAllEdges(getEdgeOptions()) }        
    });
    // Handling the actions triggered by the clickable text in the menu
    document.querySelectorAll(".clickable-action").forEach(element => {
        element.addEventListener("click", function () {
            let action = this.getAttribute("data-action");
            let target = this.getAttribute("data-target");

            if (target === "selection") {
                if (action === "expand") {
                    api.expand(cy.$(":selected"), getEdgeOptions());

                } else if (action === "collapse") {
                    api.collapse(cy.$(":selected"), getEdgeOptions());

                }
            } else if (target === "all") {
                if (action === "expand") {
                    api.expandAll(getEdgeOptions());
                } else if (action === "collapse") {
                    api.collapseAll(getEdgeOptions());
                }
                else if (action === "expandedges") {
                    api.expandAllEdges(getEdgeOptions());
                }
                else if (action === "collapseedges") {
                    api.collapseAllEdges(getEdgeOptions());
                }
                else if (action === "delete") {
                    alert("delete")
                }

            } else if (target === "edges") {
                if (action === "expand") {
                    api.expandEdges(cy.$("edge:selected"), getEdgeOptions());
                } else if (action === "collapse") {
                    api.collapseEdges(cy.$("edge:selected"), getEdgeOptions());
                }
            }
        });
    });

    // Initialize or update plugins like undoRedo and expandCollapse
    var ur = cy.undoRedo();
    var api = cy.expandCollapse({
        layoutBy: { name: 'fcose', animate: true },
        fisheye: true,
        animate: 'end',
        undoable: true,
        cueEnabled: true, // Display the expand/collapse cue
        expandCuePosition: 'top-left',
        collapseCuePosition: 'top-left',
    });
    Reveal.layout();
}


handleSlideFullyDisplayed()

