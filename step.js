<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>P21 STEP Viewer</title>
<style>
  body, html {
    height: 100%; margin: 0; font-family: Arial, sans-serif;
    display: flex; flex-direction: column;
  }
  #fileInput {
    margin: 10px;
  }
  #cy {
    flex-grow: 1;
    border: 1px solid #ccc;
    margin: 10px;
  }
</style>
<!-- Cytoscape.js CDN -->
<script src="https://unpkg.com/cytoscape@3.25.0/dist/cytoscape.min.js"></script>
</head>
<body>

<input type="file" id="fileInput" accept=".p21,.step,.txt" />
<div id="cy"></div>

<script>
  // The P21 parser code, encapsulated as a function

  function parseP21(content) {
    const lines = content.split(/\r?\n/);
    let inDataSection = false;
    const entities = new Map();

    let entityBuffer = '';
    const entityStartRegex = /^#(\d+)\s*=\s*([A-Z0-9_]+)\s*\(/i;

    for (let line of lines) {
      line = line.trim();

      if (!inDataSection) {
        if (line === 'DATA;') {
          inDataSection = true;
        }
        continue;
      }
      if (line === 'ENDSEC;') {
        break;
      }
      if (line.length === 0 || line.startsWith('//')) continue;

      entityBuffer += line + ' ';
      if (line.endsWith(';')) {
        const fullEntity = entityBuffer.trim();

        const headerMatch = fullEntity.match(entityStartRegex);
        if (!headerMatch) {
          entityBuffer = '';
          continue;
        }

        const id = '#' + headerMatch[1];
        const type = headerMatch[2].toUpperCase();

        const firstParenIndex = fullEntity.indexOf('(');
        const lastParenIndex = fullEntity.lastIndexOf(');');
        if (firstParenIndex < 0 || lastParenIndex < 0) {
          entityBuffer = '';
          continue;
        }

        const attrString = fullEntity.substring(firstParenIndex + 1, lastParenIndex);
        const attrs = parseAttributes(attrString);

        entities.set(id, { id, type, attrs, raw: fullEntity });

        entityBuffer = '';
      }
    }

    const edges = [];
    for (const entity of entities.values()) {
      extractRefs(entity.attrs).forEach(ref => {
        if (entities.has(ref)) {
          edges.push({ data: { source: entity.id, target: ref } });
        }
      });
    }

    const nodes = Array.from(entities.values()).map(({ id, type }) => ({
      data: { id, label: type }
    }));

    return { nodes, edges };
  }

  function extractRefs(attrs) {
    let refs = [];
    if (Array.isArray(attrs)) {
      attrs.forEach(a => {
        refs = refs.concat(extractRefs(a));
      });
    } else if (typeof attrs === 'string' && attrs.startsWith('#')) {
      refs.push(attrs.toUpperCase());
    }
    return refs;
  }

  function parseAttributes(attrString) {
    let attrs = [];
    let current = '';
    let depth = 0;
    let inString = false;

    for (let i = 0; i < attrString.length; i++) {
      const c = attrString[i];

      if (c === "'" && attrString[i - 1] !== '\\') {
        inString = !inString;
        current += c;
      } else if (!inString) {
        if (c === '(') {
          depth++;
          current += c;
        } else if (c === ')') {
          depth--;
          current += c;
        } else if (c === ',' && depth === 0) {
          attrs.push(parseAttributeValue(current.trim()));
          current = '';
        } else {
          current += c;
        }
      } else {
        current += c;
      }
    }
    if (current.trim() !== '') {
      attrs.push(parseAttributeValue(current.trim()));
    }
    return attrs;
  }

  function parseAttributeValue(val) {
    if (!val) return null;

    if (val.startsWith('(') && val.endsWith(')')) {
      const inner = val.substring(1, val.length - 1);
      return parseAttributes(inner);
    }

    if (val.startsWith("'") && val.endsWith("'")) {
      return val.slice(1, -1).replace(/\\'/g, "'");
    }

    if (val.startsWith('#')) {
      return val.toUpperCase();
    }

    if (!isNaN(val)) {
      return Number(val);
    }

    if (val === '$' || val.toUpperCase() === 'UNKNOWN') {
      return null;
    }

    return val;
  }

  // Cytoscape instance variable
  let cy = null;

  // File input handler
  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
      const content = e.target.result;
      const graph = parseP21(content);

      if (cy) {
        cy.destroy();
      }

      cy = cytoscape({
        container: document.getElementById('cy'),
        elements: graph,
        style: [
          {
            selector: 'node',
            style: {
              'label': 'data(label)',
              'background-color': '#0074D9',
              'color': '#fff',
              'text-valign': 'center',
              'text-halign': 'center',
              'font-size': 10,
              'width': 20,
              'height': 20,
            }
          },
          {
            selector: 'edge',
            style: {
              'width': 1,
              'line-color': '#ccc',
              'target-arrow-color': '#ccc',
              'target-arrow-shape': 'triangle',
            }
          }
        ],
        layout: { name: 'cose' },
      });
    };
    reader.readAsText(file);
  });
</script>

</body>
</html>
