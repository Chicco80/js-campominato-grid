const colNm = 100;
const colForRow = 10;

function printGrid(){
let app = document.getElementById("app");
let row = document.createElement( "div");
row.setAttribute("class", "row");
let cols = createCol();
// console.log(cols);
row.innerHTML = cols;
app.append(row);

}

function createCol(){
    let cols = "";
    for(let i = 1; i <= colNm; i++){
        // console.log(i);
        cols += `
        <div class="col col-4 box">
          ${i} 
         </div>`;
        
    }
    return cols;

}
printGrid();