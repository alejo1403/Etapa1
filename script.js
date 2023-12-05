document.addEventListener('DOMContentLoaded', function () {
    // Código para leer el archivo y procesar los datos
    // Crea una función para procesar y mostrar los datos en la tabla
});

fetch('dummyData.txt')
    .then(response => response.text())
    .then(data => processData(data));

    function processData(data) {
        const lines = data.split('\n');
        const table = document.getElementById('data-table');
    
        // Agregar encabezados
        const headers = ['ID', 'Nombre', 'Valor 1', 'Valor 2'];
        const headerRow = document.createElement('tr');
        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });
        table.appendChild(headerRow);
    
        // Agregar filas de datos
        lines.forEach(line => {
            const [id, nombre, valor1, valor2] = line.split('#').filter(Boolean);
            const row = document.createElement('tr');
            [id, nombre, valor1, valor2].forEach(cellText => {
                const cell = document.createElement('td');
                cell.textContent = cellText;
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
    }