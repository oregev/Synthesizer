export class Filter {
	constructor(ctx, nextNode) {
		this.filterNode = ctx.createBiquadFilter();
		this.nextNode = nextNode;
		this.type = "lowpass";
		this.frequency = 5000;
	}

	create = () => {
		this.filterNode.type = this.type;
		this.filterNode.frequency.value = this.frequency;
	};

	connect = () => {
		this.filterNode.connect(this.nextNode);
	};

	init = () => {
		this.create();
		this.connect();
	};

	setFrequency = (frequency) => {
		this.frequency = frequency;
	};

	nextType = () => {
		if (this.type === "lowpass") {
			this.type = "highpass";
		} else if (this.type === "highpass") {
			this.type = "bandpass";
		} else if (this.type === "bandpass") {
			this.type = "lowshelf";
		} else if (this.type === "lowshelf") {
			this.type = "highshelf";
		} else if (this.type === "highshelf") {
			this.type = "peaking";
		} else if (this.type === "peaking") {
			this.type = "notch";
		} else if (this.type === "notch") {
			this.type = "allpass";
		} else if (this.type === "allpass") {
			this.type = "lowpass";
		}
	};
}
