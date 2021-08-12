const container = document.getElementById("container");

let createGrid = function (rows, cols) {
    
    let grids = document.querySelectorAll('.grid-item');
    grids.forEach((grid) => {
        grid.remove();
    });
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
       };
    gridColorer();
};





let grids = document.querySelectorAll('.grid-item');
let resetBtn = document.getElementById("resetbtn");

let gridColorer = () => {
    
    let grids = document.querySelectorAll('.grid-item');

    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
        grid.style.cssText = 'background: black';
    })
});
}


resetBtn.onclick = () => {
    let rows = prompt("How many rows do you want?");
    let cols = prompt("How many collumns do you want?");
    if ((cols || rows) > 100) {
        return alert("Can't do more than 100 rows or collumns, try again.")
    }
    return createGrid(rows, cols);
}

createGrid(16, 16);
gridColorer();