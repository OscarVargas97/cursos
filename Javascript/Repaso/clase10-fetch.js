const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
	.then((respond) => respond.json())
	.then(data => console.log(data))

fetch(url, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'aqui deberia ir el tocken'
	},
	body: JSON.stringify({
		name: 'Chanchito feliz',
		website: 'google.com'
	})
})
	.then((respond) => respond.json())
	.then(data => console.log(data))