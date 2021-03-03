import { Engine } from "../engine/engine";

export class EngineHandler {
	constructor(ctx, presets) {
		this.ctx = ctx;
		this.presets = presets;
		this.engines = [];
	}

	setPresets(presets) {
		this.presets = { ...presets };
	}

	startEngine = (note) => {
		const engine = new Engine(this.ctx, this.presets);
		engine.play(note);
		this.engines.push({ engine, note });
	};

	stopEngine = (note) => {
		const currentEngine = this.engines.filter((engine) => engine.note === note);
		if (currentEngine) {
			currentEngine[0].engine.stop();
			this.engines = this.engines.filter((engine) => engine.note !== note);
		}
	};
}
