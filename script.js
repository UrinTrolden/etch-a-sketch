const container = document.getElementById("container");

let createGrid = function (rows, cols) {
    //https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
       };
};



createGrid(16, 16);

let grids = document.querySelectorAll('.grid-item');
let resetBtn = document.getElementById("resetbtn");

grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.cssText = 'background: black';
    })
});

resetBtn.onclick = () => {
    let rows = prompt("How many rows do you want?");
    let cols = prompt("How many collumns do you want?");
    return createGrid(rows, cols);
}

