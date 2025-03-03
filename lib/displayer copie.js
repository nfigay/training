// Predefined graphs stored in the script
const predefinedGraphs = {
    "Graph_1": [
        { data: { id: "O", label: "Mon ontologie" }, classes: "ontology" },
        { data: { id: "C", label: "Classes", parent: "O" }, classes: "class" },
        { data: { id: "P", label: "Propriétés", parent: "O" }, classes: "property" },
        { data: { id: "I", label: "Individus", parent: "O" }, classes: "individual" },
        { data: { id: "A", label: "Node A", "parent": "C" }, classes: "class" },
        { data: { id: "B", label: "Node B", "parent": "C" }, classes: "class" },
        { data: { id: "P1", label: "P1", parent: "P" }, classes: "property" },
        { data: { id: "P2", label: "P2", parent: "P" }, classes: "property" },
        { data: { id: "edgeAB", source: "A", target: "B", label: "A → B" } },
        { data: { id: "nicolas", label: "Nicolas", parent: "I" }, classes: "individual" },
        { data: { id: "P1SP2", label: "S", "source": "P1", "target": "P2", 'edgeType': "subProperty" } },

    ],
    "Graph_2": [
        { data: { id: "P", label: "Parent" }, classes: "ontology" },
        { data: { id: "X", label: "Node X", }, classes: "class" },
        { data: { id: "Y", label: "Node Y", "parent": "P" }, classes: "class" },
        { data: { id: "Z", label: "Node Z", "parent": "P" }, classes: "class" },
        { data: { id: "edgeXY", source: "X", target: "Y", label: "X → Y", type: "relation" } },
        { data: { id: "edgeYZ", source: "Y", target: "Z", label: "Y → Z", type: "relation" } }
    ]
};
// Fonction pour configurer les gestionnaires d'événements
function setupGraphEventHandlers() {
    // Attacher l'événement 'slidetransitionend' pour réagir après chaque transition de slide
    Reveal.on('slidetransitionend', handleSlideFullyDisplayed);
    Reveal.on('ready', handleSlideFullyDisplayed); // Assure que l'événement est traité au début
  }



// Function to create and update the graph dynamically


function updateGraph(graphName) {
    let currentSlide = document.querySelector('.present'); // Get the current slide
    let contentZone = currentSlide.querySelector(".content-zone");

    if (!contentZone) {
        return; // Do nothing if no content zone exists in the current slide
    }

    let imageZone = contentZone.querySelector(".image-zone");

    // If no image zone, exit
    if (!imageZone) {
        return; // Do nothing if no image zone exists
    }

    // Ensure image zone has explicit size
    imageZone.style.position = "relative"; // Required for absolute positioning of the Cytoscape container
    imageZone.style.width = "100%"; // Full width
    imageZone.style.height = "500px"; // Set a fixed height for the image zone (can be adjusted based on your layout)

    // Dynamically create the Cytoscape container if not already created
    let cyContainer = imageZone.querySelector("#cy-container");

    if (!cyContainer) {
        // Create the container dynamically
        cyContainer = document.createElement("div");
        cyContainer.id = "cy-container";
        cyContainer.style.width = "100%";  // Ensure the container takes full width
        cyContainer.style.height = "100%"; // Ensure the container takes full height

        imageZone.appendChild(cyContainer); // Insert into the image zone
    }

    // Only initialize Cytoscape if it doesn't already exist
    if (!cy) {
        // Initialize Cytoscape for the first time
        cy = cytoscape({
            container: cyContainer,
            elements: [],
            style: [
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
                // Add other styles here...
            ],
        });
    }

    // Continue with your graph setup
    cy.remove('*'); // Remove any existing elements from the graph before adding new ones
    cy.add(predefinedGraphs[graphName]); // Add the graph data based on the selected graph name
    cy.layout({ name: 'circle' }).run(); // Optionally, apply a layout to the graph

    cy.on('click', 'node, edge', function (event) {
        var target = event.target;
        console.log(target.classes());
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
}

// Initialize Cytoscape (initially null, will be created dynamically)
var cy = null;
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
// Function to create and update the graph dynamically
function updateGraph(graphName) {
    let currentSlide = document.querySelector('.present'); // Get the current slide
    let contentZone = currentSlide.querySelector(".content-zone");

    if (!contentZone) {
        return; // Do nothing if no content zone exists in the current slide
    }

    let imageZone = contentZone.querySelector(".image-zone");

    // If no image zone, exit
    if (!imageZone) {
        return; // Do nothing if no image zone exists
    }

    // Ensure image zone has explicit size
    imageZone.style.position = "relative"; // Required for absolute positioning of the Cytoscape container
    imageZone.style.width = "100%"; // Full width
    imageZone.style.height = "500px"; // Set a fixed height for the image zone (can be adjusted based on your layout)

    // Dynamically create the Cytoscape container if not already created
    let cyContainer = imageZone.querySelector("#cy-container");

    if (!cyContainer) {
        // Create the container dynamically
        cyContainer = document.createElement("div");
        cyContainer.id = "cy-container";
        cyContainer.style.width = "100%";  // Ensure the container takes full width
        cyContainer.style.height = "100%"; // Ensure the container takes full height

        imageZone.appendChild(cyContainer); // Insert into the image zone

        // Initialize Cytoscape for the first time
        cy = cytoscape({
            container: cyContainer,
            elements: [],
            style: [
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



            ],

        });
    }
    cy.on('click', 'node, edge', function (event) {
        var target = event.target;
      
        console.log(target.classes())
    }); 
    // Ajout des plugins
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

    // If the graph exists in predefinedGraphs, update the graph
    if (predefinedGraphs[graphName]) {
        //   alert("predefinedGraphs")
        cy.elements().remove(); // Remove previous graph
        cy.add(predefinedGraphs[graphName]); // Add new graph
        cy.layout({ name: "fcose" }).run(); // Apply layout

        // Adjust canvas styles after layout is applied
        setTimeout(() => {

            const canvas = cyContainer.querySelector('canvas');
            if (canvas) {
                canvas.style.position = 'absolute';
                canvas.style.top = '0px';
                canvas.style.left = '0px';
                canvas.style.width = "100%"; // Ensure canvas fills the container
                canvas.style.height = "100%"; // Ensure canvas fills the container
                canvas.style.transform = 'none'; // Remove any unwanted transform
            }
            cy.resize();
        }, 100);
    } else {
        // If no graph found for the name, just hide the container
        cyContainer.style.display = "none";
    }
}

function handleSlideFullyDisplayed(event) {
    let cyContainer = event.currentSlide.querySelector('#cy-container');
    let graphName = event.currentSlide.dataset.graph; // Get graph data attribute

    if (graphName) {
        updateGraph(graphName); // Ensure the graph is displayed

        // Ensure canvas elements are positioned correctly
        if (cyContainer) {
            var canvases = cyContainer.querySelectorAll('canvas');
            canvases.forEach(function (canvas) {
                canvas.style.position = 'absolute';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.width = "100%";
                canvas.style.height = "100%";
            });
            cy.resize();

        }
    }
}


setupGraphEventHandlers()
