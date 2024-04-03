//일반 함수
// 익명 함수
// 함수에서 매개변수 받을 떄 [문자,숫자,숫자]
// 함수: 일반함수 이름 넣거나, 익명함수를 쓴다
// 익명함수[1회성, 님들실력하기 추상화하기 힘들어서 1회성]
// addeventListener('너가 할 이벤트', '너가 동작하고 싶은 함수')
const button = document.querySelector(".button");
button.addEventListener("click", function (e) {
	console.log(e);
});
