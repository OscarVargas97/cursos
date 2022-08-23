import Interval from "./components/hook/Interval.jsx";
import useContador from "./components/hook/useContador";
import { useEffect } from "react";

//reglas de los hooks:
/*
	1- No se llaman en loops, la declaración debe ser realizada en el nivel mas alto del componente
	2- Solo se pueden llamar en 2 partes:
		- Componentes de react
		- custom hooks
	recomendación: cuando creemos un custom hooks, este debe comenzar con use* y a continuación el nombre que se le desea dar
	*/
const App = () => {
	const [contador, incrementar] = useContador(0)
	useEffect(() => {
		console.log('soy un efecto');
		document.title = contador;
	}, [contador]);
	return (
		<div>
			Contador: {contador}
			<button onClick={incrementar}>Incrementar</button>
			<Interval contador={contador} />
		</div>
	)
}

export default App;