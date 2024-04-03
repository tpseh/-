// const arr = [];
// arr.push("올영");
// arr.push("마포점");
// map (변경/치환/change/변환)
// const arr = [1, 2, 3, 4, 5];

//const newArr = arr.map((value)=> value*value)
//const newArr = arr.map((value) => value + 100);

// console.log(newArr);
// 홀수면 제곱 짝수면 10
//const newArr = arr.map((value) => value % 2 == 0 ? value + 10 : value*value)

// const arr1 = ["storm", "mapo", "olive", "flirting"];
// const newArr = arr1.map((value) => {
// 	if (value.includes("o")) {
// 		return value.toUpperCase(value);
// 	} else value;
// });
// console.log(newArr);

//4글자 작으면 길이 숫자 크면 대문자

// const cewArr = arr1.map((value) => {
// 	if (value.length <= 4) {
// 		return value.length;
// 	} else if (value.length > 4) {
// 		return value.toUpperCase(value);
// 	}
// });
// console.log(cewArr);
const soccer = [
	{
		nation: "korea",
		rank: 22,
	},
	{
		nation: "japan",
		rank: 18,
	},
	{
		nation: "china",
		rank: 104,
	},
];

// const newSoccer = soccer.map((value) => {
// 	value.nation = value.nation.toUpperCase();
// 	value.rank = value.rank + 10;
// 	return value;
// });

// console.log(newSoccer);

//30 이상 높으면 underdog: false.아니고

// const newSoccer = soccer.map((value) => {
// 	if (value.rank > 30) {
// 		value.underdog = true;
// 	} else {
// 		value.underdog = false;
// 	}
// 	return value;
// });

// console.log(newSoccer);

const test = [
	{
		dateTime: "2024-01-15T08:38:57.729+0000",
		type: "view",
		queryItemId: "8809695678363", // o
		item: {
			itemId: "8809695678363",
			imageUrl: "10/0000/0018/A00000018373105ko.jpg?l=ko",
			itemName: "[아랑Pick] VT 리들샷 100 에센스 50ml", //o
			itemUrl: "goodsNo=A000000183731",
			categoryId: "10000010001",
			brandId: "A001873", // o
			count: 805, // o
			rank: null,
			rankDiff: null,
			countDiff: null,
			id: "8809695678363",
		},
	},
];
const testWne = test.map((value) => {
	const latitude = value.latitude;
	const queryItemId = value.queryItemId;
	const itemName = value.itemName;
	const brandId = value.brandId;
	const count = value.count;

	const newObj = {
		latitude: latitude,
		queryItemId: queryItemId,
		itemName: itemName,
		brandId: brandId,
		count: count,
	};
	return newObj;
});

console.log(testWne);
