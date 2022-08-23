import { Component } from "react";
import { useState } from "react";


//reglas de los hooks:
/*
	1- No se llaman en loops, la declaración debe ser realizada en el nivel mas alto del componente
	2- Solo se pueden llamar en 2 partes:
		- Componentes de react
		- custom hooks
	recomendación: cuando creemos un custom hooks, este debe comenzar con use* y a continuación el nombre que se le desea dar
	*/
class AppClass extends Component {
	state = { contador: 0 }
	incrementar = () => {
		this.setState({ contador: this.state.contador + 1 })
	}
	render() {
		return (
			<div>
				Contador: {contador}
				<button onClick={this.incrementar}>Incrementar</button>
			</div>
		)
	}
}

const App = () => {
	const [contador, setContador] = useState(0)
	return (
		<div>
			Contador: {contador}
			<button onClick={() => setContador(contador + 1)}>Incrementar</button>
		</div>
	)
}

export default App;