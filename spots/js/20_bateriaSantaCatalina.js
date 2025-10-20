async function loadJSON(){

  //ejecutamos la peticion para buscar el json
  const response = await fetch("json/20_bateria_santa_catalina.json");

  //parseamos la respuesta a una variable con estructura json
  const infoSitio2 =      await response.json();


  //1 elemento a modificar
  var titulo = document.querySelector("h1");


  console.log(infoSitio2)

}

// INVOCACION 

loadJSON();