import { keyToNote } from "./keyToNote";

export class KeyboardHandler {
	constructor(engineHandler) {
		this.engineHandler = engineHandler;
		this.keysDown = [];
	}

	shouldRunKeyDown = (key) => {
		if (!this.keysDown.includes(key)) {
			this.keysDown.push(key);
			return keyToNote(key) !== 0;
		}
	};

	shouldRunKeyUp = (key) => {
		if (this.keysDown.includes(key)) {
			this.keysDown = [...this.keysDown.filter((down) => down !== key)];
			return keyToNote(key) !== 0;
		}
	};

	keyDown = (key) => {
		if (this.shouldRunKeyDown(key)) {
			this.engineHandler.startEngine(keyToNote(key));
		}
	};

	keyUp = (key) => {
		if (this.shouldRunKeyUp(key)) {
			this.engineHandler.stopEngine(keyToNote(key));
		}
	};

	init = () => {
		document.addEventListener("keydown", (e) => this.keyDown(e.key));
		document.addEventListener("keyup", (e) => this.keyUp(e.key));
	};
}
