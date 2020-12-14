import React from "react";
import Volume from "./volume/Volume";
import Pan from "./pan/Pan";
import Presets from "../controls/presets/Presets";
import Octav from "../controls/octav/Octav";
import Oscilator from "../controls/oscilator/Oscilator";
import Envelope from "./envelope/Envelope";
import Filter from "../controls/filter/Filter";
import "./controls.css";

const Controls = () => {
	return (
		<div className="control-panel">
			<div className="upper-control centerIt">
				<div>
					<Volume />
					<Pan />
				</div>
				<Presets />
				<Octav />
			</div>
			<div className="lower-control centerIt">
				<Oscilator />
				<Envelope />
				<Filter />
			</div>
		</div>
	);
};

export default Controls;
