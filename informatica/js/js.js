document.write("<h1>Hello world</h1>");


let numberUno = 60;
let numberDos = 100;

let result = numberUno + numberDos;

console.log (result);

let name = "pepe";
let last = "polla";

let completo = name + " " + last;

console.log (completo)

let mayor = numberUno > numberDos;

console.log (mayor)


let desigual = numberUno != numberDos;

console.log (desigual)

if (completo === true){
	console.log("correcto");
} else {
	console.log("incorrecto");
}
// se puede poner con == pero === es mas "¿fuerte?"

if (numberUno > 70){
	console.log("esmayor de 70");
}else if(numberUno > 15){
	console.log("esmayor de 15");
}else{
	console.log("esmenor de 15");
}

let typeCard = "Credit Card";
switch(typeCard) {
	case "Debit Card":
		console.log("This is a dedit card");
		break;
	case "Credit Card":
		console.log("This is a credit card");
		break;
	default:
		console.log("No Card");
}
// while == C

let names = ["ryan", "joe", "john"];

console.log(names[1])





