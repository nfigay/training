import { predefinedGraphs } from "./predefinedGraphs.js";
//console.log(JSON.stringify(predefinedGraphs));

// Styles for rendering and associated functions
function setTargetArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};

    // Iterate through the collapsed edges to collect unique target arrow shapes
    for (let i = 0; i < collapsedEdges.length; i++) {
        const edge = collapsedEdges[i];
        const shape = edge.style('target-arrow-shape');

        if (shape && shape !== 'none') {
            shapes[shape] = true;
        }   
    }

    // Determine a consistent shape for the collapsed edge based on directionality
    if (Object.keys(shapes).length === 0) {
        return 'none'; // Default to no arrow if no distinct shapes found
    }
    return Object.keys(shapes)[0]; // Use the first shape found in collapsed edges
}

function setSourceArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};

    // Iterate through the collapsed edges to collect unique source arrow shapes
    for (let i = 0; i < collapsedEdges.length; i++) {
        const edge = collapsedEdges[i];
        const shape = edge.style('source-arrow-shape');

        if (shape && shape !== 'none') {
            shapes[shape] = true;
        }
    }

    // Determine a consistent shape for the collapsed edge based on directionality
    if (Object.keys(shapes).length === 0) {
        return 'none'; // Default to no arrow if no distinct shapes found
    }
    return Object.keys(shapes)[0]; // Use the first shape found in collapsed edges
}

function setColor4CompoundEdge(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const edgeType = collapsedEdges[0].data('edgeType');

    // Check if the edge type has a defined line color, return it if it exists
    const color = collapsedEdges[0].style('line-color');
    if (color) {
        return color;
    }
    return '#b3b3b3'; // Default color if none is defined
}


function doElemsMultiTypes(elems) {
    const classDict = {};
    for (let i = 0; i < elems.length; i++) {
        classDict[elems[i].data('edgeType')] = true;
    }
    return Object.keys(classDict).length > 1;
}

function setLineStyleForCompoundEdge(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const edgeType = collapsedEdges[0].data('edgeType');

    // Inherit line style from the first collapsed edge's edge type
    const lineStyle = collapsedEdges[0].style('line-style');
    if (lineStyle) {
        return lineStyle;
    }
    return 'solid'; // Default line style if none is defined
}

var renderingStyles = [
    {
        selector: ':parent',
        style: {
            'background-opacity': 0.333
        }
    },
    // Collapsed node styling
    {
        selector: "node.cy-expand-collapse-collapsed-node",
        style: {
            "background-color": "darkblue",
            "shape": "rectangle"
        }
    },

    // Selected node styling
    {
        selector: ':selected',
        style: {
            'overlay-color': "#6c757d",
            'overlay-opacity': 0.3,
            'background-color': "#999999"
        }
    },

    {
        selector: 'node',
        style: {
            'label': ele => ele.data("label"),
            'text-halign': 'center',
            'text-valign': 'top',
            'color': 'black',
        }

    },
    {
        selector: 'node.class',
        style: {
            'background-color': '#D1A500', // Protégé Color for class nodes
            'shape': 'ellipse',
        }
    },
    {
        selector: 'node.property',
        style: {
            'background-color': '#0079BA', // Protégé Color for property nodes
            'shape': 'square',
        }
    },
    {
        selector: 'node.individual',
        style: {
            'background-color': '#874B82', // Purple for individual nodes
            'shape': 'diamond',
            'font-size': function (ele) {
                const label = ele.data('label');
                const labelLength = label ? label.length : 1;
                return Math.max(10, 12 / (labelLength / 2));  // Dynamic font size, divided by 2

            }
        },
    },
    {
        selector: 'edge.subProperty',
        style: {
            'line-color': '#000000',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'target-arrow-shape': 'triangle', // Use a square shape for the arrow
            'target-arrow-color': '#000000',  // Matching color for the arrow
            'source-arrow-shape': 'none', // No source arrow
            'label': '',              // No label on the specialization edge
            'arrow-scale': 1.5,       // Scale the arrow size for better visibility
            'target-arrow-fill': 'hollow'  // Hollow rectangle (border only)
        }
    },
    // Edge style: equivalentProperty
    {
        selector: 'edge.equivalentProperty',
        style: {
            'line-color': '#000000',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'label': '≡',              // Equivalence symbol as label
            'text-background-color': 'white', // Background for the label
            'text-background-opacity': 1,    // Make the background fully visible
            'text-background-padding': 2,    // Add padding around the label
            'text-background-shape': 'roundrectangle', // Shape of the background

        }
    },
    // Edge style: inverseProperty
    {
        selector: 'edge.inverseProperty',
        style: {
            'line-color': '#000000',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'label': '⟲',              // Inverse symbol as label
            'text-background-color': '#fff', // Background for the label
            'text-background-opacity': 1,    // Make the background fully visible
            'text-background-padding': 2,    // Add padding around the label
            'text-background-shape': 'roundrectangle', // Shape of the background

        }
    },
    // Edge chain property next chain member
    {
        selector: 'edge.nextchainmember',
        style: {
            'line-color': '#000000',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'label': '',              // Inverse symbol as label
            'target-arrow-shape': 'vee', // Use a square shape for the arrow
            'target-arrow-color': '#000000',  // Matching color for the arrow
            'source-arrow-shape': 'none', // No source arrow                      
        }
    },
    // Edge chain property next chain member type
    {
        selector: 'edge.nextchaintype',
        style: {
            'line-color': 'green',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'target-arrow-shape': 'none', // Use a square shape for the arrow
            'source-arrow-shape': 'none', // No source arrow                      
        }
    },
    // Edge style: subClass
    {
        selector: 'edge.subClass',
        style: {
            'line-color': '#1f77b4',  // Blue, matching Protégé's ontology color
            'width': 1.5,
            'mid-target-arrow-shape': 'triangle',
            'mid-target-arrow-fill': 'hollow',
            'mid-target-arrow-color': '#1f77b4',
            'target-arrow-shape': 'none', // No target arrow to avoid duplication
            'label': ''

        }
    },
]

function handleSlideFullyDisplayed() {
    // vérifier que le slide actuel doit ou non afficher un graphe
    let presentSlide = Reveal.getCurrentSlide();
    console.log(presentSlide)
    let dataGraph = presentSlide ? presentSlide.getAttribute('data-graph') : null;
    console.log("toto")
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
        style: renderingStyles
    });
    cy.on('click', 'node, edge', function (event) {
        var target = event.target;
        //  console.log(target.classes());
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

