import { Component } from "react";
import { useState, useEffect } from "react";

class Interval extends Component {
	intervalo = '';
	componentDidMount() {
		this.intervalo = setInterval(() => console.log(this.props.contador), 1000)
	}
	componentWillUnmount() {
		clearInterval(this.intervalo)
	}

	render() {
		return (
			<p>Interval</p>
		);
	};
};

export default Interval