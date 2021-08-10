const container = document.getElementById("container");

let createGrid = function (rows, cols) {
    //https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
       };
};

createGrid(16, 16);