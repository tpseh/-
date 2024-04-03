//1 타입 선언
const a: number = 1234;
const b: string = "1234";
const c: boolean = true;
const d: { name: string; age: number } = { name: "엄준식", age: 21 };
const e: number[] = [1, 2, 3, 4];
const f: {}[] = [{ name: "안녕" }]; //배열 안에 객체 들어갈때

//2.new 타입
const g: any = [1, {}, 3, 2]; // 최상의 타입
const h: string | null = null; // union 타입 합집합
const i: (a: string) => void = (a) => {
	return 1;
};
// const j:number & null // 교집합
// const l: naver // 도달 불가능 타입
const m: undefined = undefined;
