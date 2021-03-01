import { Core } from "./core";
import { Osc } from "./modules/osc";
import { Gain } from "./modules/gain";

export class Engine {
	constructor() {
		this.ctx = new AudioContext();
		this.core = new Core(this.ctx);
		this.gain = new Gain(this.ctx, this.core.filter.filterNode);
		this.osc = new Osc(this.ctx, this.gain.gainNode);
	}

	play = (note) => {
		this.core.init();
		this.gain.init();
		this.osc.start(note);
	};

	stop = () => {
		this.osc.stop();
	};
}
