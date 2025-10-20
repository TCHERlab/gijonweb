async function loadJSON(){

  //ejecutamos la peticion al buscar el json
const response = await fetch("json/11_elogioHorizonte.json");
//parseamos la respuesta a una variable con estructura json
const infositio11 = await response.json();

//el elemento a modificar
var titulo = document.querySelector("h1");

console.log(infositio11)
  }

  loadJSON