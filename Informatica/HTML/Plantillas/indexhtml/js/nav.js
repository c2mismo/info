
function navShow() {
  /* Mostramos la barra de menus */
  let nBar = document.getElementsByClassName("navBar");
  nBar.item(0).classList.toggle("hidden");

  /* Creamos los botones */
  let nMenu = document.getElementsByClassName("navMenu");
  if(nMenu.length < 3){
    nBar.item(0).insertAdjacentHTML('beforeend', '<button id="ardButton" class="navMenu">Arduino</button>');
    document.getElementById("ardButton").addEventListener('click', navMenuArduino);

    nBar.item(0).insertAdjacentHTML('beforeend', '<button id="elecButton" class="navMenu">Electronica</button>');
    document.getElementById("elecButton").addEventListener('click', navMenuElectronica);

    nBar.item(0).insertAdjacentHTML('beforeend', '<button id="inforButton" class="navMenu">Informatica</button>');
    document.getElementById("inforButton").addEventListener('click', navMenuInformatica);

    /* Añadimos los indices */
    let mArd = document.getElementById("menuArduino");
    let mEle = document.getElementById("menuElectronica");
    let mInf = document.getElementById("menuInformatica");




  }
}


/* document.getElementById().addEventListener('click', nombreFunction); */
/* let span = document.getElementsByTagName("button")[1].classList[0]; */
/* nMenu.remove */




/* Lo crea al final del documento
function navShow() {
  let divNab = document.createElement('div');
  divNab.innerHTML = '<p>Hola Hola Hola Hola Hola Hola Hola Hola</p>';
  document.body.appendChild(divNab);
}
*/

// Tamaño < 600px oculto los botones
// y añade un boton menu para mostrar los otros
/*
function navExpand() {
  let variable = document.getElementsByClassName("navMenu");
  for (let i = 0; i < variable.length; i++) {
    variable[i].classList.toggle("hideLikeMovil");
  }
}
*/
// muestran y ocultan los menus temáticos
function navMenuArduino() {
  document.getElementById("menuElectronica").classList.add("hidden");
  document.getElementById("menuInformatica").classList.add("hidden");
  document.getElementById("menuArduino").classList.toggle("hidden");
}

function navMenuElectronica() {
  document.getElementById("menuArduino").classList.add("hidden");
  document.getElementById("menuInformatica").classList.add("hidden");
  document.getElementById("menuElectronica").classList.toggle("hidden");
}

function navMenuInformatica() {
  document.getElementById("menuArduino").classList.add("hidden");
  document.getElementById("menuElectronica").classList.add("hidden");
  document.getElementById("menuInformatica").classList.toggle("hidden");
}
