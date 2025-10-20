async function loadJSON(){

    // ejecutamos la peticion para buscar el json
    const response = await fetch("json/09_termas_Romanas_Campo_Váldes.json");

    // parseamos la respuesta a una variable con estructura json
    const infoTermasRomanasCampoValdes = await response.json();

    var titulo = document.querySelector("h1");

    console.log(infoTermasRomanasCampoValdes)

}

loadJSON();