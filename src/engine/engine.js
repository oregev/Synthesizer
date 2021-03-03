import { Core } from "./core";
import { Osc } from "./modules/osc";
import { Gain } from "./modules/gain";

export class Engine {
	constructor(ctx, presets) {
		this.ctx = ctx;
		this.core = new Core(this.ctx, presets);
		this.gain = new Gain(this.ctx, this.core.filter.filterNode, presets);
		this.osc = new Osc(this.ctx, this.gain.gainNode, presets);
	}
	play = (note) => {
		this.core.init();
		this.gain.init();
		this.osc.start(note);
	};
	stop = () => this.osc.stop();
}
