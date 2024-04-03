//alias [별칭]
//number,string,..
type Parson = {
	name: string;
	age: number;
};

type NumStr = string | number;
type Weekdays = "월" | "화" | "수" | "목" | "금" | "토" | "일";

const pikachu: Parson = { name: "피카츄", age: 10 };
const data: NumStr = 1;
const tomorrow: Weekdays = "금";

type Flavor = "블랙그라운드" | "아로마노트" | "디카페인";
type Natoin = "콜롬비아" | "케냐" | "브라질";

type CoffeeBean = {
	natoin: Natoin;
	flavor: Flavor;
};

type Product = "가공유" | "원유" | "연유";

type Milk = {
	fatty: number;
	product: Product;
};

type Latte = CoffeeBean & Milk;

const magaLatte: Latte = {
	fatty: 100,
	flavor: "블랙그라운드",
	natoin: "케냐",
	product: "원유",
};

// type unit = {hp:,mp:}
// type skills = {q:,w:,e:,r:}
// type champ

type Unit = {
	name: string;
	hp: number;
	mp?: number;
};

type Skills = {
	q: string;
	w: string;
	e: string;
	r: string;
};

type Champ = Unit & Skills;

const champ: Champ = {
	name: "리신",
	hp: 100,
	q: "음파",
	w: "방호",
	e: "딱지치기",
	r: "용의분노",
};
