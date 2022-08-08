const r = new Rectangulo()

class Chancho {
	constructor(estado = 'normal') {
		console.log(`soy un chancho ${estado}`)
	}
}

class Chancho2 {
	estado = 'normal'
	constructor() {
		console.log(`soy un chancho ${this.estado}`)
	}
}

class Chancho3 {
	estado = 'normal'
	constructor(estado) {
		this.estado = estado
	}

	hablar() {

	}
}

const feliz = new Chancho('feliz')
const triste = new Chancho('triste')
const nose = new Chancho2('') 