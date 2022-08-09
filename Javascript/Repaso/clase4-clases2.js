const r = new Rectangulo();

class Chancho {
	constructor(estado = 'normal') {
		console.log(`soy un chancho ${estado}`);
	};
};

class Chancho2 {
	estado = 'normal'
	constructor() {
		console.log(`soy un chancho ${this.estado}`);
	};
};

class Chancho3 {
	estado = 'normal'
	constructor(estado) {
		this.estado = estado
	};

	hablar() {
		console.log(`soy un chancho ${this.estado}`);
	};
};

class Chancho4 {
	propiedad = 'mi propiedad'
	#hambre = 'false'
	constructor(estado) {
		this.estado = estado
	};

	hablar() {
		console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho'}`);
	};
};

const feliz = new Chancho('feliz');
const triste = new Chancho('triste');

const nose = new Chancho2('');

const feliz2 = new Chancho3('feliz');
const triste2 = new Chancho3('triste');
const nose2 = new Chancho3('');
feliz2.hablar();
triste2.hablar();
nose2.hablar();

const feliz3 = new Chancho4('feliz');
console.log(feliz3.__proto__);
feliz3.hablar()