const button = document.querySelector(".red");
button.addEventListener("click", red);
const button1 = document.querySelector(".orange");
button1.addEventListener("click", orange);
const yellowButton = document.querySelector(".yellow");
yellowButton.addEventListener("click", yellow);

function red() {
	const pallet = document.querySelector(".pallet");
	pallet.innerHTML = "선택된 색깔은 빨강";
	pallet.style.backgroundColor = "red";
}
function orange() {
	const pallet = document.querySelector(".pallet");
	pallet.innerHTML = "선택된 색깔은 오렌지";
	pallet.style.backgroundColor = "orange";
}
function yellow() {
	const pallet = document.querySelector(".pallet");
	pallet.innerHTML = "선택된 색깔은 노랑";
	pallet.style.backgroundColor = "yellow";
}
