import { data } from "./data.js";

const centerList = data[0].result.centerList.map((value) => {
	const gymName = value.gymName;
	const gymPhotoSmall = value.gymPhotoSmall;
	const address = value.address;
	const tags = value.tags;

	const newObj = {
		gymName: gymName,
		gymPhotoSmall: gymPhotoSmall,
		address: address,
		tags: tags,
	};
	return newObj;
});

const trainers = [...centerList, ...centerList, ...centerList];
const container = document.querySelector(".container");
trainers.forEach((trainer) => {
	const mainBox = document.createElement("div");
	mainBox.classList.add("grid");
	mainBox.innerHTML = `
 	<div class="grid-box">
 	<img src="${trainer.gymPhotoSmall}" alt="" />
	<div class="grid-box2>
	<p class="grid-text">${trainer.gymName}</p>
    <p>${trainer.address}<p>
	<button class="button">${trainer.tags}</button>

	</div>

 </div>
     `;
	container.appendChild(mainBox);
});
