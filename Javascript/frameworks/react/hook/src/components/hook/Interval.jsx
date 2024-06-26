import { useState, useEffect } from "react";

const Interval = ({ contador }) => {
	useEffect(() => {
		const i = setInterval(() => { console.log(contador) }, 1000);
		return () => clearInterval(i);
	}
		, [contador]
	);
	return (
		<p>Interval</p>
	);
}
export default Interval