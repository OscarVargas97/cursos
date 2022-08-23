// Expresión de clases
const Rectangulo = class R {

}
// Declaración de clase
//no tiene Hosting las declaradas con class
class Rectangulo2 {

}

// Hoisting
//Esto es cuando tomamos variables definidas con var
//y funciones definidas con function y las llevamos
//al comienzo del archivo
function Cuadrado() {
	console.log(Cuadrado, Rectangulo2)
}

console.log
const r = new Rectangulo() 