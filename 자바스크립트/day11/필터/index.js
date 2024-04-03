// const arr = [1, 2, 3, 4, 5];
// const a = arr.map((value) => value * value);

// const b = arr.filter((value) => value > 3);

//const arrStr = ["생일", "파티", "플러팅", "올리브영"];

//const arrNew = arrStr.fill((value) => value.length >= 3);

const arrObj = [
	{
		food: "raawFish",
		print: 80000,
	},
	{
		food: "cake",
		print: 40000,
	},
	{
		food: "soju",
		print: 1000,
	},
	{
		food: "riceceke",
		print: 20000,
	},
];
// 홀수맛 짝수 노맛

// const arrNew = arrObj.map((value, index) => {
// 	if (index % 2 == 0) {
// 		value.flavor = false;
// 	} else {
// 		value.flavor = true;
// 	}
// 	return value;
// });

// console.log(arrNew);
// const arrNew = arrObj.filter((value) => value.print <= 30000);

// const strArr = ["add", "notad", "abcd"];

// const arrNew = strArr.filter((value) => !value.includes("ab"));

// console.log(arrNew);

// const a = 12345; // [5,4,3,2,1]
// const b = a.toString;
// const f = b.split("");
// const c = f.reverse();

// const re = c.map((value) => parseInt(value));

// a.split().reverse();

// const number = [2, 4, 6, 8, 10];

// // index
// number.map((value, index) => {
// 	console.log(value, index);
// });

// const number = '01033334444' // ******4444
// const number1 = '0277778888' //

// console.log(f);
// arrObj.forEach((value) => {
// 	value.tex = true;
// 	value.text = "1234";
// });
// console.log(arrObj);

const namber = "01033334444";
const number1 = "027778888";

const arr = namber.split("");

const newArr = arr.map((value, index) => {
	if (namber.length - index > 4) value = "*";
	return value;
});

console.log(newArr);

const arr1 = number1.split("");

const arrNer = arr1.map((value, index) => {
	if (number1.length - index > 4) value = "*";
	return value;
});
console.log(arrNer);
