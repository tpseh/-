const hamburger = document.querySelector(".hamburger");
const xIcon = document.querySelector(".xIcon");
const menu = document.querySelector(".menu");
xIcon.style.display = "none";
menu.style.display = "none";

hamburger.addEventListener("click", dropDown);
xIcon.addEventListener("click", drom);

function dropDown(params) {
	xIcon.style.display = "block";
	menu.style.display = "block";
	hamburger.style.display = "none";
}

function drom(rams) {
	xIcon.style.display = "none";
	menu.style.display = "none";
	hamburger.style.display = "block";
}
