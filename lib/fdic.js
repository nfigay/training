const columnDescriptions = {
  ACQDATE: "Acquisition date of the branch",
  ADDRESS: "Primary street address of the branch",
  ADDRESS2: "Secondary address line",
  BKCLASS: "Institution classification (e.g. Commercial Bank)",
  CBSA: "Core Based Statistical Area code",
  CBSA_DIV: "Metropolitan Division code",
  CBSA_DIV_FLG: "Flag indicating if CBSA division applies",
  CBSA_DIV_NO: "Number of the CBSA Division",
  CBSA_METRO: "CBSA Metropolitan area number",
  CBSA_METRO_FLG: "Flag indicating if metropolitan division applies",
  CBSA_METRO_NAME: "Name of CBSA Metro area",
  CBSA_MICRO_FLG: "Micropolitan Division flag",
  CBSA_NO: "CBSA number",
  CERT: "FDIC Certificate number for institution",
  CITY: "City where the branch is located",
  COUNTY: "County of the branch",
  CSA: "Combined Statistical Area",
  CSA_FLG: "Flag indicating CSA",
  CSA_NO: "CSA number",
  ESTYMD: "Date branch was established",
  FI_UNINUM: "FDIC Unique Identification Number for institution",
  ID: "Internal ID",
  LATITUDE: "Latitude of the branch",
  LONGITUDE: "Longitude of the branch",
  MAINOFF: "Main office flag",
  MDI_STATUS_CODE: "Minority Depository Institution status code",
  MDI_STATUS_DESC: "Minority status description",
  NAME: "Name of the financial institution",
  OFFNAME: "Name of the office",
  OFFNUM: "Branch office number",
  RUNDATE: "Run date of data extract",
  SERVTYPE: "Service type code",
  SERVTYPE_DESC: "Service type description",
  STALP: "State abbreviation",
  STCNTY: "State and county code",
  STNAME: "State name",
  UNINUM: "Unique ID for the branch",
  ZIP: "ZIP Code of the branch"
};

const fileInput = document.getElementById('csvFile');
const controls = document.getElementById('controls');
const logicToggle = document.getElementById('logicToggle');
const colSelect = document.getElementById('colSelect');
const colLabel = document.getElementById('colLabel');
const valSelect = document.getElementById('valSelect');
const addFilterBtn = document.getElementById('addFilter');
const clearAllBtn = document.getElementById('clearAll');
const filtersDiv = document.getElementById('filters');
const preview = document.getElementById('preview');
const showGraphBtn = document.getElementById('showGraph');
const downloadBtn = document.getElementById('downloadGraph');
const graphJsonArea = document.getElementById('graphJson');

let header = [], uniqueValues = {}, allData = [];
let filters = [], shownIds = new Set();
let table, tbody;

function loadFDICCSV(){
  const file = fileInput.files[0];
  if (!file) return;
  preview.innerHTML = '<em>Analyzing CSV…</em>';
  controls.style.display = 'none';
  showGraphBtn.style.display = 'none';
  downloadBtn.style.display = 'none';
  graphJsonArea.value = '';
  uniqueValues = {}; header = []; allData = [];

  Papa.parse(file, {
    worker: true, header: true, skipEmptyLines: true,
    step: (res) => {
      const row = res.data;
      if (!header.length) {
        header = res.meta.fields;
        header.forEach(h => uniqueValues[h] = new Set());
      }
      allData.push(row);
      header.forEach(h => uniqueValues[h].add(row[h] || ''));
    },
    complete: () => {
      colSelect.innerHTML = '';
      header.forEach(h => {
        const opt = document.createElement('option');
        opt.value = h;
        opt.textContent = h;
        colSelect.appendChild(opt);
      });
      fillValues(header[0]);
      controls.style.display = '';

      colLabel.title = columnDescriptions[header[0]] || '';

      preview.innerHTML = '';
      table = document.createElement('table');
      const thead = document.createElement('thead');
      const tr = document.createElement('tr');
      header.forEach(h => {
        const th = document.createElement('th');
        th.textContent = h;
        if (columnDescriptions[h]) th.title = columnDescriptions[h];
        tr.appendChild(th);
      });
      thead.appendChild(tr);
      table.appendChild(thead);
      tbody = document.createElement('tbody');
      table.appendChild(tbody);
      preview.appendChild(table);
    }
  });
}


  colSelect.addEventListener('change', () => {
    const col = colSelect.value;
    colLabel.title = columnDescriptions[col] || '';
    fillValues(col);
  });

  function fillValues(col) {
    valSelect.innerHTML = '';
    Array.from(uniqueValues[col]).sort().forEach(v => {
      const opt = document.createElement('option');
      opt.value = v;
      opt.textContent = v || '— empty —';
      valSelect.appendChild(opt);
    });
  }

  addFilterBtn.addEventListener('click', () => {
    const col = colSelect.value;
    const values = Array.from(valSelect.selectedOptions).map(o => o.value);
    if (!col || !values.length) return;
    filters.push({ col, values });
    renderFilters();
    applyFilters();
    showGraphBtn.style.display = '';
    downloadBtn.style.display = '';
  });

  clearAllBtn.addEventListener('click', () => {
    filters = [];
    shownIds.clear();
    filtersDiv.innerHTML = '';
    tbody.innerHTML = '';
    showGraphBtn.style.display = 'none';
    downloadBtn.style.display = 'none';
    graphJsonArea.value = '';
  });

  function renderFilters() {
    filtersDiv.innerHTML = '';
    filters.forEach(f => {
      const div = document.createElement('div');
      div.className = 'filter-item';
      div.textContent = `${f.col}: ${f.values.join(', ')}`;
      filtersDiv.appendChild(div);
    });
  }

  function applyFilters() {
    tbody.innerHTML = '';
    shownIds.clear();
    const logic = logicToggle.value;
    allData.forEach(row => {
      const match = (logic === 'AND')
        ? filters.every(f => f.values.includes(row[f.col] || ''))
        : filters.some(f => f.values.includes(row[f.col] || ''));
      if (match) {
        const id = row.UNINUM;
        if (!id || shownIds.has(id)) return;
        shownIds.add(id);
        const tr = document.createElement('tr');
        header.forEach(h => {
          const td = document.createElement('td');
          td.textContent = row[h] || '';
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      }
    });
  }

  showGraphBtn.addEventListener('click', () => {
    const nodes = [], edges = [], seen = new Set(), groups = {};
    allData.forEach(row => {
      if (!shownIds.has(row.UNINUM)) return;
      const id = row.UNINUM;
      if (!id) return;
      const inst = row.CERT || row.FI_UNINUM || 'unknown';
      if (!groups[inst]) {
        groups[inst] = 'group_' + inst;
        nodes.push({ data: { id: groups[inst], label: row.NAME || inst } });
      }
      if (!seen.has(id)) {
        seen.add(id);
        const dataObj = {
          id: id,
          label: row.OFFNAME || id,
          parent: groups[inst]
        };
        header.forEach(h => dataObj[h] = row[h]);
        nodes.push({ data: dataObj });
      }
      if (row.FI_UNINUM && row.FI_UNINUM !== id) {
        edges.push({
          data: {
            id: crypto.randomUUID(),
            source: row.FI_UNINUM,
            target: id,
            label: 'part of'
          }
        });
      }
    });
    graphJsonArea.value = JSON.stringify({ elements: nodes.concat(edges) }, null, 2);
  });

  downloadBtn.addEventListener('click', () => {
    const blob = new Blob([graphJsonArea.value], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'graph.json';
    a.click();
  });

