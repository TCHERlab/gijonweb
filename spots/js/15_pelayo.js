
async function loandJSON(){

  //ejecutamos la petición para buscar el json
  const response = await fetch("json/01_sitio1.json");

  //parseamos la respuesta a una variable con estructura json
  const infoSitio1 = await response.json();

  //el elemnto a modificar
  var titulo= document.querySelector("h1");

  infoSitio1

}