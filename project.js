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
 
function menu(){
	document.querySelector('.aside').style.width="200px";
	document.querySelector('.cv-content').style.marginLeft="200px";
}

function closeNav(){
	document.querySelector('.aside').style.width="0";
	document.querySelector('.cv-content').style.marginLeft="4px";

}
function picha(){
	const picture=document.querySelector('img');
	picture.style.width="150px";
	picture.style.height="150px";
	picture.style.padding="40px";
}

// document.addEventListener("mouseover",function(){
// 	const picture=document.querySelector('img');
// 	picture.style.width="150px";
// 	picture.style.height="150px"
// 	picture.style.padding="45px";
// });
// document.addEventListener("mouseout",function(){
// 	const picture=document.querySelector('img');
// 	picture.style.width="80px";
// 	picture.style.height="80px"

// })

// document.addEventListener('mouseover',function(){
// 	document.querySelector('.aside').style.width="200px";
// });
// document.addEventListener('mouseout',function(){
// 	document.querySelector('.aside').style.width="0";

function signup(e) {
	event.preventDefault()
	
	var email = document.getElementById("m").value;
	var fullname = document.getElementById("fullname").value;
	var pass = document.getElementById("p").value;
	var msg = document.querySelector(".message");
	 var user = {
	
		email: email,
		fullname: fullname,
		password: pass,
	};
	
	var json = JSON.stringify(user);
	
	localStorage.setItem(email, json)
	
	// window.location.href = "index.html";
	msg.innerHTML = "You have Successful Sign Up";
	}
	
	function login(e) {
		event.preventDefault();
	
	
	var email = document.getElementById("email1").value;
	var pass = document.getElementById("password1").value;
	var result = document.querySelector(".log");
	
	var user = localStorage.getItem(email);
	var data = JSON.parse(user);
	
	if(user == null) {
		result.innerHTML = "Email Does not Exist";
	}
	
	else if(email == data.email && pass == data.password) {
		result.innerHTML = "Login Sucessfull";
		window.location.href = "cv.html";
	
	}else {
		result.innerHTML = "Wrong password";
	}
	}