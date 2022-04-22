document.addEventListener('DOMContentLoaded', function() {

	document.querySelector("#userForm").onsubmit = function() {

		const testing = document.createElement('h1')
		testing.innerHTML = "Does This Work?";
		document.querySelector("body").append(testing);

		return false;
	}

	async function get_quiz_questions() {
		const response = await fetch('https://placeholderurl.my/api') //I have to create my fake API still and place that url here
		const data = await response.json();
		updateDOM(data); //This updateDOM method isn't defined yet, I have to define it still
	}

	//i'm trying to get the JSON REST API to work on my github and this site https://my-json-server.typicode.com/ 
	//but i'm stuck and don't know what i'm doing wrong
})