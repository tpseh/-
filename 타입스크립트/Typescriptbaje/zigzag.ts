type Photo = {
	imgUrl?: string;
};
type Heart = {
	isCheck: boolean;
};
type PhotoWithHeart = Photo & Heart;

type Info = {
	title: string;
	detail: string;
	price: string;
	discountPrice?: string;
};
type Banner = {
	isMileage: boolean;
	isFreeDelivery: boolean;
};

type Review = {
	starRate: number;
	count: number;
};

type ZigZagCard = PhotoWithHeart & Info & Banner & Review;
