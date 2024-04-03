//assertion[단언].ts
// Element 부모- [] 그외 자식들
//as 문법
const box1 = document.querySelector(".img") as HTMLImageElement;
box1.src = "";

const box2 = document.querySelector(".input") as HTMLInputElement;
box2.value = "asdad";

//<> 제너릭 문법
const text = "hello";
const text1 = <string>text; // 단언 해줌
const text2 = <HTMLInputElement>document.querySelector("input");
