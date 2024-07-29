document.getElementById("contact-us").addEventListener('submit', function (e) {
	e.preventDefault();
	const name = document.getElementById("name").value;
	const message = document.getElementById("message").value;

	console.log('Name:', name);
	console.log('Message:', message);

	document.getElementById('contact-us').reset()
})