const checkboxBtn = document.querySelector(".checkbox");
const consentboxBtn = document.querySelector(".consentbox");
const buttonBtn = document.querySelector(".button");
const gameBtn = document.querySelector(".game");

let nom = false;
let con = false;

checkboxBtn.addEventListener("input", function (e) {
	nom = e.target.checked;
	if (nom && con) {
		chle = buttonBtn.style.background = "green";
	} else {
		chle = buttonBtn.style.background = "red";
	}
});
consentboxBtn.addEventListener("input", function (e) {
	con = e.target.checked;
	if (nom && con) {
		chle = buttonBtn.style.background = "green";
	} else {
		chle = buttonBtn.style.background = "red";
	}
});

buttonBtn.addEventListener("click", function (e) {
	if (nom && con) {
		window.alert("가입이 완료 되었습니다");
	} else {
		if (!nom) {
			alert("서비스 체크해주세요");
		} else {
			alert("개인정보 체크해주세요");
		}
	}
});
