const heightBtn = document.querySelector(".height");
const weightBtn = document.querySelector(".weight");
const submitBtn = document.querySelector(".submit");
let heihf;
let wfsd;

heightBtn.addEventListener("input", function (e) {
	heihf = parseInt(e.target.value);
});

weightBtn.addEventListener("input", function (e) {
	wfsd = parseInt(e.target.value);
});

submitBtn.addEventListener("click", function (e) {
	const bmi = wfsd / heihf / 100 ** 2;
	alert(`bmi는 ${bmi}`);
});
