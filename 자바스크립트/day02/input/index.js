const input = document.querySelector(".input");
const eyeButton = document.querySelector(".eye");
const openEye = '<i class="fa-solid fa-eye">';
const closeEye = '<i class="fa-solid fa-eye-slash"></i>';

eyeButton.addEventListener("click", function () {
	const eye = input.type === "text" ? closeEye : openEye;
	eyeButton.remove();
});
