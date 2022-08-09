const arr = [1, 2, 3, 4]

const r = arr.filter((el, i) => {
	el > 2
		? console.log(i)
		: console.log(r);
})

