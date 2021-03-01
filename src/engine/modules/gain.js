export class Gain {
	constructor(ctx, nextNode) {
		this.gainNode = ctx.createGain();
		this.nextNode = nextNode;
		this.attack = 0;
		this.decay = 100;
	}

	create = () => {
		//const currentTime = this.ctx.currentTime;
		//this.gainNode = this.ctx.createGain();
		//this.gainNode.gain.setValueAtTime(0, currentTime);
		//this.gainNode.gain.linearRampToValueAtTime(1, currentTime + this.attack);
		//this.gainNode.gain.linearRampToValueAtTime(1, currentTime + this.decay);
	};

	connect = () => {
		this.gainNode.connect(this.nextNode);
	};

	init = () => {
		//this.create();
		this.connect();
	};

	setAttack = (value) => {
		this.attack = value;
	};

	setDecay = (value) => {
		this.decay = value;
	};
}
