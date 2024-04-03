class Button {
	constructor(tli, atr, efg) {
		this.tli = tli;
		this.atr = atr;
		this.efg = efg;
	}
	redou(parna) {
		const buttBtn = document.createElement(".button");
		const parna = document.createElement(".div");
		buttBtn.innerHTML = this.tli;
		buttBtn.style.color = this.atr;
		buttBtn.style.background = this.efg;
	}
}
