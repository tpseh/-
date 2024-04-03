const button = document.querySelector(".button");
//addEventListener('어떤 종류 이벤트? 어떤 기능을?')
button.addEventListener("click", makeHappyNewYear);
// button.addEventListener("click", function () {
// 	const div = document.createElement("div");
// 	div.innerHTML = "새해복 많이 받으세요";
// 	const body = document.querySelector("body");
// 	body.appendChild(div);
// });

// hello 정의(만듬)
function hello() {
	window.console.log("안녕!");
}
function legend(x) {
	window.console.log(`${x}는 레전드다.`);
}

function makeHappyNewYear() {
	const div = document.createElement("div");
	div.innerHTML = "새해복 많이 받으세요";
	const body = document.querySelector("body");
	body.appendChild(div);
}
