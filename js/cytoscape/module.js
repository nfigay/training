// Define the list of modules to load
const modules = [
  "./js/cytoscape/module1.js",
  "./js/cytoscape/module2.js",
  "./js/cytoscape/module3.js"
];

// Function to load a script dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'module';
    script.async = true; // Ensure async behavior
    script.onload = () => resolve(src); // Resolve when script is loaded
    script.onerror = (err) => reject(new Error(`Failed to load module: ${src}`)); // Reject on error
    document.head.appendChild(script);
  });
}

// Function to load all modules sequentially
async function loadModules() {
  for (const module of modules) {
    try {
      await loadScript(module);
      console.log(`${module} loaded successfully`);
    } catch (error) {
      console.error(error);
    }
  }
}

loadModules();
