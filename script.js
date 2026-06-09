const container = document.getElementById("grid-container");

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);


        square.addEventListener("click", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

const resizeBtn = document.getElementById("resize-btn");

resizeBtn.addEventListener("click", () => {
    let size = parseInt(prompt("How many squares per side? (max 100)"));

    if(isNaN(size) || size <= 0) {
        alert("Please enter a valid number.");
        return;
    }
    if (size > 100) size = 100;
    createGrid(size);
});