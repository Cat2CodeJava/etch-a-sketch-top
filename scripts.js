let mainContainer = document.querySelector("#mainContainer");

let xAxis = 16;
let yAxis = 16;

for(let x = 0; x < xAxis; x++) {
    let xAxisContainer = document.createElement("div");
    xAxisContainer.id = `xAxisContainer${x}`;
    xAxisContainer.style.display = 'flex'; 
    for(let y = 0; y < yAxis; y++) {
        let yAxisContainer = document.createElement("div");
        yAxisContainer.id = `yAxisContainer${y}`;
        yAxisContainer.style.display = 'flex';
        yAxisContainer.style.flexDirection = 'column';
        yAxisContainer.style.width = '50px';
        yAxisContainer.style.height = '50px';
        yAxisContainer.style.border = '1px solid black'

        yAxisContainer.addEventListener("mouseover", () => {
            console.log(yAxisContainer.id);
            yAxisContainer.style.backgroundColor = 'black';
        });
        xAxisContainer.appendChild(yAxisContainer);
    }
    mainContainer.appendChild(xAxisContainer);
}