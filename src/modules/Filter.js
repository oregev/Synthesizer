import React, { useContext } from "react";
import { PresetsContext } from "../context/Presets";

export const Filter = () => {
	const [presets, setPresets] = useContext(PresetsContext);
	const { fillType, fillFreq } = presets;

	const getType = () => {
		if (fillType === "lowpass") {
			return "highpass";
		} else if (fillType === "highpass") {
			return "bandpass";
		} else if (fillType === "bandpass") {
			return "lowshelf";
		} else if (fillType === "lowshelf") {
			return "highshelf";
		} else if (fillType === "highshelf") {
			return "peaking";
		} else if (fillType === "peaking") {
			return "notch";
		} else if (fillType === "notch") {
			return "allpass";
		} else if (fillType === "allpass") {
			return "lowpass";
		}
	};

	const setFilterType = () => setPresets({ ...presets, fillType: getType() });

	return (
		<div className="filter presetContainer">
			<div className="filter--controls">
				<p className="filter--name">{fillType}</p>
				<button onClick={setFilterType}>F</button>
			</div>

			<div className="filter--controls">
				<label htmlFor="frequency">FREQ</label>
				<input
					id="frequency"
					name="frequency"
					onChange={(e) => setPresets({ ...presets, fillFreq: +e.target.value })}
					type="range"
					min={20}
					max={20000}
					value={fillFreq}
				/>
			</div>
			<p>FILTER</p>
		</div>
	);
};
