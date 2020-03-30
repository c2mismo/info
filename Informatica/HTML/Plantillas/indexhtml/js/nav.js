// Tamaño < 600px oculto los botones
// y añade un boton menu para mostrar los otros
function navMenu(){
	let variable = document.getElementsByClassName('navBar');
	for(let i = 0; i < variable.length; i++){
		variable[i].classList.toggle('hideLikeMovil');
	}
}
// muestran y ocultan los menus temáticos
function navMenuArduino(){
	let anclaArduino = document.getElementById('menuArduino');
	anclaArduino.classList.toggle('hidden');
	let anclaElectronica = document.getElementById('menuElectronica');
	anclaElectronica.classList.add('hidden');
	let anclaInformatica = document.getElementById('menuInformatica');
	anclaInformatica.classList.add('hidden');
}

function navMenuElectronica(){
	let anclaElectronica = document.getElementById('menuElectronica');
	anclaElectronica.classList.toggle('hidden');
	let anclaArduino = document.getElementById('menuArduino');
	anclaArduino.classList.add('hidden');
	let anclaInformatica = document.getElementById('menuInformatica');
	anclaInformatica.classList.add('hidden');
}

function navMenuInformatica(){
	let anclaInformatica = document.getElementById('menuInformatica');
	anclaInformatica.classList.toggle('hidden');
	let anclaArduino = document.getElementById('menuArduino');
	anclaArduino.classList.add('hidden');
	let anclaElectronica = document.getElementById('menuElectronica');
	anclaElectronica.classList.add('hidden');
}
