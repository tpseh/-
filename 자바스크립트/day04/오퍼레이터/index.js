// //산술 연산자

// const a = 5 % 2;
// const b = 2;
// b++; //b에 1을 증가 시킴
// let c = 3;
// c = 4;
// ++c; // 연산자 우선순위 (전위 연산) 증가
// c++; // 연산자 우선순위 (후위 연산)
// --c; //감소
// c--;

// //할당 연산자

// const a1 = 1;
// a1 += 3; //a1  = a1 + 3 축약버전
// // -= *=

// // 비교 연산자 [결과 boolean]
// //>,<, >= ,<=, ==,  != ,===, !===

// const b1 = 5 > 1; //true
// const b2 = 5 == 5; //true
// const b3 = 5 == "5"; // true 절대 쓰지 쓰면 안됨
// const b4 = 5 === "5"; //false

// // 논리 연산자
// // &&(and) ||(or) !(not)
// const c1 = 3 > 1 && 5 > 1;
// // ||: 하나라도 true 이면 true이다.
// const c2 = 3 > 5 || 3 > 7 || 3 > 1;

// // !:반대
// const c4 = !""; //true

// // !!:
// const c5 = !!""; // false

// // 삼항연산자
// //조건 ? 참 : 거짓

// const e = 5 > 3 ? "🤶" : "👶"; //

const input = document.querySelector(".input");
const eyeButton = document.querySelector(".eye");
const openEye = '<i class="fa-solid fa-eye">';
const closeEye = '<i class="fa-solid fa-eye-slash"></i>';

eyeButton.addEventListener("click", function () {
	const eye = input.type === "text" ? closeEye : openEye;
	eyeButton.innerHTML = eye;
	input.type = input.type === "text" ? "password" : "text";
});
