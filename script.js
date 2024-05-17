let eraser = false
const container = document.querySelector("#container")
const resetButton = document.querySelector("#reset")
const eraserButton = document.querySelector("#eraser")
const drawButton = document.querySelector("#draw")
const gridButton = document.querySelector("#new-grid")

function createGrid(n){
for (let i = 0; i<n; i++){
    const row = document.createElement("div")
    row.classList.add("row")
    for (let j = 0; j<n; j ++) {
        const col = document.createElement("div")
        col.classList.add("column")
        row.appendChild(col)
    }
    container.appendChild(row)
}}

container.addEventListener("mouseover", (x) => {
    if (x.target.className == "column" && eraser==false) {
    x.target.classList.add("gray")}
    else if (x.target.className =="column gray" && eraser == true) {
    x.target.classList.remove("gray")
    }
})

resetButton.addEventListener("click", () => {
    const body = document.querySelectorAll(".gray")
    body.forEach((x) => x.classList.remove("gray"))}
)

eraserButton.addEventListener("click", () => eraser = true)
drawButton.addEventListener("click", () => eraser = false)
gridButton.addEventListener("click", () => {
    let newGridNumber = +prompt("For a x by x square, what x would you like?")
    container.innerHTML = ""
    createGrid(newGridNumber)
})

createGrid(16)