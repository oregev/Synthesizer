import React, { useContext } from "react";
import { PresetsContext } from "../context/Presets";

export const Oscilator = () => {
	const [presets, setPresets] = useContext(PresetsContext);

	return (
		<div className="oscilator presetContainer">
			<div className="oscilator--controls">
				<p>SIN</p>
				<button onClick={() => setPresets({ ...presets, ocsType: "sine" })}>1</button>
			</div>
			<div className="oscilator--controls">
				<p>SQU</p>
				<button onClick={() => setPresets({ ...presets, ocsType: "square" })}>2</button>
			</div>
			<div className="oscilator--controls">
				<p>SAW</p>
				<button onClick={() => setPresets({ ...presets, ocsType: "sawtooth" })}>3</button>
			</div>
			<div className="oscilator--controls">
				<p>TRI</p>
				<button onClick={() => setPresets({ ...presets, ocsType: "triangle" })}>4</button>
			</div>
			<p>OSCILATOR TYPE</p>
		</div>
	);
};
