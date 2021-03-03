import { Filter } from "./modules/filter";
import { Out } from "./modules/out";

export class Core {
	constructor(ctx, { filter }) {
		this.ctx = ctx;
		this.output = new Out(this.ctx);
		this.filter = new Filter(this.ctx, this.output.outputNode, filter);
	}
	init = () => this.filter.init();
}
