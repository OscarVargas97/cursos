import { Component } from "react";
import Body from "./Body";
import Navbar from "./Navbar";


class Layout extends Component {
	render() {
		const { carro, esCarroVisible, mostrarCarro } = this.props
		return (
			<div>
				<Navbar carro={carro} esCarroVisible={esCarroVisible} mostrarCarro={mostrarCarro}>
				</Navbar>

				<Body>
					{this.props.children}
				</Body>
			</div>
		)
	}
}

export default Layout