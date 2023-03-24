const container = document.querySelector('.container');
const gridRows = 16;

for(let i = 0; i < gridRows; i++) {
    var row = document.createElement('div');
    row.classList.add('row');
    for(let j = 1; j <= gridRows; j++) {
        var cell = document.createElement('div');
        cell.classList.add('cell');
        /* cell.textContent = (i * gridRows) + j; */
        row.appendChild(cell);
    }
    container.appendChild(row);
}

function promptGridSize() {
    let gridSize = prompt("Enter grid size", "16");
    if(gridSize <= 100 && gridSize >= 1) {

        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }

        for(let i = 0; i < gridSize; i++) {
            var row = document.createElement('div');
            row.classList.add('row');
            for(let j = 1; j <= gridSize; j++) {
                var cell = document.createElement('div');
                cell.classList.add('cell');
                /* cell.textContent = (i * gridRows) + j; */
                row.appendChild(cell);
            }
            container.appendChild(row);
        }

        const cells = document.querySelectorAll('.cell');
        
        cells.forEach(cell => cell.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'green';
        }));
        
        cells.forEach(cell => cell.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'blue';
        }))

    } else {
        container.textContent = 'Invalid Grid Size';
    }

}

const gridSize = document.querySelector('.grid-size');
gridSize.addEventListener('click', promptGridSize);

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green';
}));

cells.forEach(cell => cell.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'blue';
}))