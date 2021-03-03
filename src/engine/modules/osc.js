import { noteToFreq } from "../tools/noteToFreq";
export class Osc {
	constructor(ctx, nextNode) {
		this.oscNode = null;
		this.ctx = ctx;
		this.nextNode = nextNode;
		this.type = "triangle";
		this.oscFreq = 1000;
	}

	setType = (type) => {
		switch (type) {
			case 1: {
				this.type = "sine";
				break;
			}
			case 2: {
				this.type = "square";
				break;
			}
			case 3: {
				this.type = "sawtooth";
				break;
			}
			case 4: {
				this.type = "triangle";
				break;
			}
			default: {
				this.type = "sine";
				break;
			}
		}
	};

	setFreq = (note) => (this.oscFreq = noteToFreq(note));
	create = () => {
		this.oscNode = this.ctx.createOscillator();
		this.oscNode.type = this.type;
		this.oscNode.frequency.value = this.oscFreq;
	};
	connect = () => this.oscNode.connect(this.nextNode);
	disconnect = () => this.oscNode.disconnect(this.nextNode);
	remove = () => (this.oscNode = null);
	start = (note) => {
		this.setFreq(note);
		this.create();
		this.connect();
		this.oscNode.start(0);
	};
	stop = () => {
		this.oscNode.stop(0);
		this.disconnect();
		this.remove();
	};
}
