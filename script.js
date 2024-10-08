fetch("https://raw.githubusercontent.com/oamweb/observatoriosuy.github.io/main/datos.csv")
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    const table = document.getElementById('myTable');

    rows.forEach(row => {
      const cells = row.split(',');
      const tr = document.createElement('tr');
      cells.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      // Crear el botón con el nombre de la segunda columna
      const button = document.createElement('button');
      button.textContent = cells[1]; // Asume que el nombre está en la segunda columna
      button.onclick = () => {
        alert(row); // Mostrar toda la fila en una alerta
      };
      tr.appendChild(td);
      table.appendChild(tr);
    });
  });
