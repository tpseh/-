const a = window.prompt("숫자를 입력하셈");
const b = parseInt(a);

function 구구단출력() {
	for (let i = 1; i <= 9; i++) {
		window.console.log(i * b);
	}
}

구구단출력();
