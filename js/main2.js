var button = document.getElementById('button');

button.addEventListener('click', function(event) {
	console.log("You clicked a button!");
	button.innerHTML = "I've been clicked!";
})