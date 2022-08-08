import { Component } from "react";

const styles = {
	detallesCarro: {
		backgroundColor: '#fff',
		position: 'absolute',
		marginTop: 30,
		boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
		borderRadius: '5px',
		width: '300px',
		right: '50px'
	},
	img: {
		width: '50px',
		height: '50px'
	},
	ul: {
		margin: 0,
		padding: 0
	},
	producto: {
		listStyle: 'none',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '25px 20px',
		borderBottom: 'solid 1px #aaa'
	}
}

class DetalleCarro extends Component {
	render() {
		const { carro } = this.props
		return (
			<div style={styles.detallesCarro}>
				<ul style={styles.ul}>
					{carro.map(x =>
						<li style={styles.producto} key={x.name}>
							<img style={styles.img} src={x.img} alt={x.name} />
							{x.name}
							<span>{x.cantidad}</span>
						</li>)}
				</ul>
			</div>
		)
	}
}

export default DetalleCarro