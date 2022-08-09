const arr = [1, 2, 3, 4]

const mapped = arr.map((el) => el * 2)
console.log(mapped)

const user = [
	{ id: 1, name: 'Chanchito feliz' },
	{ id: 2, name: 'Chanchito Otaku' },
	{ id: 3, name: 'Chanchito triste' },
	{ id: 4, name: 'Chanchito emo' },
	{ id: 5, name: 'Chanchito felipe' }
]

const mapped2 = users.map((user) => {
	`<h1>${user.name}</h1>`
});

console.log(mapped2);