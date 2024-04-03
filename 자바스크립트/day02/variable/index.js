// var[원조], let, const [2015년 태생]
//1.var 쓰면 안됨
// - 갱신됨
// - 변수명이 두번 반복 가능

//2.let
let a = 10;
a = 20;

//3.const
const b = 10;
b = 20; // 안됨

//변수명 이름 짓기
//1. 숫자로 시작안됨
//2. 특수문자 _ 빼고 다안됨
//3. 대소문자 구분함 ex) const a = 1 const A =1
//4. 고유성을 띄우면 대소문자 쓸것 ex) const PI = 3.14

// 변수명 이름 컨벤션(국룰)
//1. 의미 있는 변수명 쓸 것.
//2. 두 단어 합치면 snake_name, camelName 해야함
// -1) mega + coffee => mega_coffee
// -2) mega + coffee => megaCoffee
