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


// document.addEventListener('mouseover',function(){
// 	document.querySelector('.aside').style.width="200px";
// });
// document.addEventListener('mouseout',function(){
// 	document.querySelector('.aside').style.width="0";

