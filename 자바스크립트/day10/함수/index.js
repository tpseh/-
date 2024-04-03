// 1,일반 함수
// function remo() {
// }
//2 익명함수
// function () {}
//3.콜백함수
//함수안의 함수
// 4.화살표 함수 (매개변수) =>(로직)
// const add = (a,b) => {return a+b}
// const add = (a, b) => a + b;
// const minus = (a, b) => a - b;
// const multi = (a, b) => a * b;
// const something = (a, b) => {
// 	return a + b * 2;
// };
// function add(a,b) {
//     return a - b
// }
//1.어떤 문자열이 들어오면 그것을 대문자화 시켜서 돌려주는 함수
//2.어떤 문자열이 들어오면 맨뒤에 엄준식을 붙혀서 돌려주는 함수
// const add = (a, b) => {
//     const bkr = a
//     co
// 	return toUpperCase(a, b);
// };
// const upper = (x) => x.toUpperCase(x);
// const air = (x) => x + "엄준식";
//문자열이 세개 매개변수로 왔을때 서로 다 이어주는 함수
// const add = (a, b, c) => a + b + c;
// //2, 홀짝 알려주는 함수
// const even = (x) => {
// 	if (x % 2 == 0) {
// 		return x + "짝수";
// 	} else {
// 		return x + "홀수";
// 	}
// };
// // 찐막
// // 어떤 문자열이 들어올때, 앞에 "찐막" 뒤에 "찐막"
// const bdd = (x) => "찐막" + x + "찐막";
//1,객체가 들어오면 umm:'엄준식'생성하는 함수 만들기
//3. 객체가 x = {{name:'lette',price:'2500'}  들어오면
// => LATTE, 3500, umm;'엄준식'
// const some = (x) => {
// 	// x 가 들어오면
// 	x.name = x.name.toUpperCase(x);
// 	x.price += 1000;
// 	x.umm = "엄준식";
// 	return x;
// };
//4. {{name:'lette',price:'2500'} + discount: 2250}
const some = (x) => {
	const name = x.name;
	const price = x.price;
	x.name = name.toUpperCase(x);
	if (price >= 3000) {
		x.price = price * 0.9;
	}
	return x;
};
// 어떤 x 가 들어 왔을때 프라이스가

let a = [];
let b = 0;

for (let i = 0; i <= 5; i++) {
	if (i % 2 != 0) {
		a.push(i);
		b += a ** 2;
	}
}

console.log(a);
