//import export

const chanchoFelices = ['chancho1', 'chancho 2', 'chancho3']
export const chanchoTriste = ['triste', 'triste 2', 'triste3']
export const otrosChanchos = ['chancho1', 'chancho 2', 'chancho3']
//module.exports = chanchoFelices
const fn1 = () => {
	'fn 1'
}

function fn2() {
	return 'fn 2'
}

module.exports = {
	chanchoFelices,
	chanchoTriste
}
export { chanchoTriste, otrosChanchos, fn1, fn2 }
export default chanchoFelices
