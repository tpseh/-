const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const nomber = document.querySelector(".nomber");

plusBtn.addEventListener("click", function () {
	number.innerHTML = parseInt(number.innerHTML) + 1;
});

minusBtn.addEventListener("click", function () {
	number.innerHTML = parseInt(number.innerHTML) - 1;
});

// 숫자 문자열

//RAM[기억] 변수/데이터 타입

let bste = 7;
let egr = 560000;
let rest = egr * bste;

console.log(rest);
