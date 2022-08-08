import { Component } from "react";

const styles
class Producto extends Component {
	render() {
		const { producto } = this.props
		return (
			<div div >
				<img src={producto.img} alt={producto.name} />
				<h3>{producto.name}</h3>
				<p>{producto.price}</p>
			</div >
		)
	}
}

export default Producto