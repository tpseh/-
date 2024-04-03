const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const nomberBtn = document.querySelector(".nomber");
const submitBtn = document.querySelector(".submit");
const inputBtn = document.querySelector(".text");
const counBtn = document.querySelector(".count");

plusBtn.addEventListener("click", function () {
	nomberBtn.innerHTML = parseInt(nomberBtn.innerHTML) + 1;
});

minusBtn.addEventListener("click", function () {
	nomberBtn.innerHTML = parseInt(nomberBtn.innerHTML) - 1;
	if ((nomberBtn.innerHTML = 0)) {
		alert("마이너스");
	}
});
submitBtn.addEventListener("click", function () {
	if (nomberBtn.innerHTML > 0) {
		alert(`${nomberBtn}이상입니다`);
	} else {
		alert("수량을선택하세요");
	}
});

inputBtn.addEventListener("input", function (e) {
	const length = e.target.value.length;
	if (length <= 20) {
		counBtn.innerHTML = length;
	} else {
		console.log(e.target.value.subString(0, 20));
		e.target.value = e.target.value.subString(0, 20);
	}
});
