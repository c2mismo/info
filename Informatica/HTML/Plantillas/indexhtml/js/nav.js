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
	let anclaArduino = document.getElementsByClassName('dirArduino');
	anclaArduino[0].classList.toggle('hidden');
	let anclaElectronica = document.getElementsByClassName('dirElectronica');
	anclaElectronica[0].classList.add('hidden');
	let anclaInformatica = document.getElementsByClassName('dirInformatica');
	anclaInformatica[0].classList.add('hidden');
}

function navMenuElectronica(){
	let anclaElectronica = document.getElementsByClassName('dirElectronica');
	anclaElectronica[0].classList.toggle('hidden');
	let anclaArduino = document.getElementsByClassName('dirArduino');
	anclaArduino[0].classList.add('hidden');
	let anclaInformatica = document.getElementsByClassName('dirInformatica');
	anclaInformatica[0].classList.add('hidden');
}

function navMenuInformatica(){
	let anclaInformatica = document.getElementsByClassName('dirInformatica');
	anclaInformatica[0].classList.toggle('hidden');
	let anclaArduino = document.getElementsByClassName('dirArduino');
	anclaArduino[0].classList.add('hidden');
	let anclaElectronica = document.getElementsByClassName('dirElectronica');
	anclaElectronica[0].classList.add('hidden');
}
