const updateSpeedV = document.getElementById("updateSpeed")
const gridSizeV = document.getElementById("gridSize")
const updateSpeed = document.getElementById("updateSpeedI")
const gridSize = document.getElementById("gridSizeI")

updateSpeed.addEventListener('input',function(){
    updateSpeedV.textContent = this.value+" ms" || "0 ms";
})

gridSize.addEventListener('input',function(){
    gridSizeV.textContent = this.value+"x"+this.value || "0x0";
})