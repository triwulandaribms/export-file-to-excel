async function tampilData() {
  try {
    const response = await fetch("/api/biodata");
    const data = await response.json();
    const table = document.getElementById("data-table");

    table.innerHTML = "";

    const headerRow = table.insertRow();
    for (const key in data[0]) {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    }

    data.forEach((row) => {
      const tr = table.insertRow();
      for (const key in row) {
        const cell = tr.insertCell();
        cell.textContent = row[key];
      }
    });
  } catch (error) {
    console.error("Fetch data error:", error);
    alert("Failed to fetch data.");
  }
}

async function exportFileKeExcel() {
  try {
    const response = await fetch("/api/export-excel");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "biodata.xlsx";
    a.click();
    window.URL.revokeObjectURL(url);
    console.log("File biodata.xlsx terdownload");
  } catch (error) {
    console.error("export data error:", error);
    alert("gagal export.");
  }
}

document.getElementById("exportButton").addEventListener("click", () => {
  exportFileKeExcel();
});

tampilData();
