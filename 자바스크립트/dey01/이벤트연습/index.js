const button = document.querySelector(".dark-button");
// const button1 = document.querySelector(".white-button");

button.addEventListener("click", dark);
button.addEventListener("click", white);

function dark() {
	const body = document.querySelector("body");
	body.style.backgroundColor = "black";
}
// function white() {
// 	const body = document.querySelector("body");
// 	body.style.backgroundColor = "white";
// }
