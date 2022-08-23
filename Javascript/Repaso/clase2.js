// Las funciones normalmente se declaran de la siguiente
//manera

function Fn() {
	//{prop: 'propiedad'}
	this.prop = 'propiedad'
	// no es necesario el return ya que queda completamente implícito
	// return 'chanchito feliz'
}

fn.prototype.lala = function FuncionDePrototipo() { }
//Las funciones de Javascript tienen un contexto de this
//La palabra reservada class simplemente es una capa sintáctica
//sobre una función.
const r = new fn()
// Cuando se utiliza la palabra reservada new, sobre una función
// este crea un objeto vació donde se ingresan las propiedades
//de la función, como se observa en la linea 5
console.log(r.__proto__)
//la palabra class es simplemente azucar sintactica

//esto solo aplica para las funciones con la palabra reservada
//Function

////////////

//Las fat arrow function
const fatFn = () => { // No tienen contexto de this
	return 'chanchito feliz'
}
//las fat arrow function no pueden ser llamadas con la palabra new
//ya que no poseen un contexto this

//pero las fat arrow function tienen un return implícito 