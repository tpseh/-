import { data } from "./data.js";

const arr = data[0].DATA.map((value) => {
	const WEEKLY_TITLE_IMAGE = value.WEEKLY_TITLE_IMAGE;
	const CONTENT_TEXT = value.CONTENT_TEXT;
	const WEEKLY_TITLE_IMAGE2 = value.WEEKLY_TITLE_IMAGE2;
	const TAGS = value.TAGS;

	const newObj = {
		WEEKLY_TITLE_IMAGE: WEEKLY_TITLE_IMAGE,
		CONTENT_TEXT: CONTENT_TEXT,
		WEEKLY_TITLE_IMAGE2: WEEKLY_TITLE_IMAGE2,
		TAGS: TAGS,
	};
	return newObj;
});

const coupangPlay = [...arr, ...arr, ...arr];
const container = document.querySelector(".container");
coupangPlay.forEach((coupangpl) => {
	const mainBox = document.createElement("div");
	mainBox.classList.add("grid");
	mainBox.innerHTML = `
 	<div class="box">
 	<img src="${coupangpl.WEEKLY_TITLE_IMAGE2}" alt="" />
	<div class="grid-box2>
	<p class="grid-text">${coupangpl.WEEKLY_TITLE_IMAGE}</p>
    <p>${coupangpl.CONTENT_TEXT}<p>
	<span>${coupangpl.TAGS}/span>

	</div>

 </div>
     `;
	container.appendChild(mainBox);
});
