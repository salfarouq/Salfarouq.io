function login() {
	var username = document.querySelector("#username").value;
			var password = document.querySelector("password").value;
	if (username === "example" && password === "password") {
		window.location.href = "restricted-page.html";
		return false;
	} else {
		alert("Invalid username or password.");
		return false;
	}
}
document.addEventListener('DOMContentLoaded',function(){

	const form = document.querySelector('form').onsubmit=function(){
		window.open("cv.html");

	};
	return false;
})