const loginBox = document.querySelector(".loginBox");
const idInput = document.querySelector(".id");
const pwInput = document.querySelector(".pw");
const loginButton = document.querySelector(".login");

let pwValue;

pwInput.addEventListener("input", function (e) {
	pwValue = e.target.value;
});

loginButton.addEventListener("click", function (e) {
	const isValid = pwValue === "1234!";
	isValid ? loginSuccess() : window.alert("비밀번호 확인해주세요");
});

function loginSuccess() {
	loginBox.innerHTML = "";
	const backendNickname = null;
	const nickname = backendNickname || "guest"; // 백엔드 로그인 닉네임 가져오는 코드
	loginBox.insertAdjacentHTML("beforebegin", `<span>${nickname}</span>`);
}
