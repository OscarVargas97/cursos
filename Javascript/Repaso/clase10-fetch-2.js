const url = 'https://jsonplaceholder.typicode.com/users'


// Esto es código funcional 
fetch(url)
	.then((respond) => respond.json())
	.then(data => console.log(data))



//mayor parte del tiempo (esto es código imperativo)
const fn = async () => {
	const response = await fetch(url, {
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
	const data = await response.json()
	console.log(data)
}
fn()
