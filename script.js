/*<div class="gridrow">
   <div class="box"><span>2</span>
 </div>*/


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }



 
  function setLevel(event){
    //   console.log(this);

   const lvl = document.getElementById("lvl").value;
   console.log(lvl);
   let numQuad;
   switch (lvl){
        case "1":
        default:
           numQuad = 100;
           break;
        case "2":
            numQuad = 81;
            break;
        case "3":
            numQuad = 49;
            break;   
   }
    let boxPerSide = Math.sqrt(numQuad);
    console.log(boxPerSide)
    genGrid(numQuad, boxPerSide);
  }

  function genGrid(numQuad, boxPerSide){
  console.log(numQuad)
  let app = document.getElementById("app");
  app.innerHTML = "";
  let row = document.createElement("div");
  row.setAttribute("class","gridrow");
  for(let i = 1; i<= numQuad; i++){
  const quad = genBox(i,boxPerSide);
  row.append(quad);
  }
  app.append(row);

}
function genBox(numQuad,boxPerSide){
    let quad = document.createElement("div");
    quad.setAttribute("class", "box");
    quad.style.width = `calc(100% / ${boxPerSide})`;
    quad.style.height = `calc(100% / ${boxPerSide})`;
    quad.classList.add("puntatore")
    quad.innerHTML = `<span>${numQuad}</span>`
    quad.addEventListener("click", coloraCella);
    return quad;

}
function coloraCella(){
  this.style.backgroundColor = "#6495ed";
  this.classList.remove("puntatore");
  this.removeEventListener("click", coloraCella);
}

 document.getElementById("play").addEventListener("click", setLevel);

 //prima parte finita//

