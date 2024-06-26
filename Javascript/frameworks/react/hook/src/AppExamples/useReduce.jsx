//reglas de los hooks:
/*
	1- No se llaman en loops, la declaración debe ser realizada en el nivel mas alto del componente
	2- Solo se pueden llamar en 2 partes:
		- Componentes de react
		- custom hooks
	recomendación: cuando creemos un custom hooks, este debe comenzar con use* y a continuación el nombre que se le desea dar
	*/
import { useState } from "react";
import { useReducer } from "react";
// state = {contador:0}
// action = { type: string, payload: any }
const inicial = { contador: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case 'incrementar':
			return { contador: state.contador + 1 }
		case 'decremental':
			return { contador: state.contador - 1 }
		case 'set':
			return { contador: action.payload }
		default:
			return state;
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, inicial)
	const [valor, setValor] = useState(0)
	return (
		<div>
			Contador : {state.contador}
			<input value={valor} onChange={e => setValor(e.target.value)}></input>
			<button onClick={() => dispatch({ type: 'incrementar' })}>Mas</button>
			<button onClick={() => dispatch({ type: 'decremental' })}>Menos</button>
			<button onClick={() => dispatch({ type: 'set', payload: parseInt(valor) })}>set</button>
		</div>
	)
}

export default App;