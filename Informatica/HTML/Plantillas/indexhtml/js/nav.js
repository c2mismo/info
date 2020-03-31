// Tamaño < 600px oculto los botones
// y añade un boton menu para mostrar los otros
function navMenu() {
  let variable = document.getElementsByClassName("navBar");
  for (let i = 0; i < variable.length; i++) {
    variable[i].classList.toggle("hideLikeMovil");
  }
}
// muestran y ocultan los menus temáticos
function navMenuArduino() {
  document.getElementById("menuArduino").classList.toggle("hidden");
  document.getElementById("menuElectronica").classList.add("hidden");
  document.getElementById("menuInformatica").classList.add("hidden");
}

function navMenuElectronica() {
  document.getElementById("menuElectronica").classList.toggle("hidden");
  document.getElementById("menuArduino").classList.add("hidden");
  document.getElementById("menuInformatica").classList.add("hidden");
}

function navMenuInformatica() {
  document.getElementById("menuInformatica").classList.toggle("hidden");
  document.getElementById("menuArduino").classList.add("hidden");
  document.getElementById("menuElectronica").classList.add("hidden");
}
