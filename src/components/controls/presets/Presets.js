import React, { useState, useEffect } from "react";

import { getDefaultPreset, getNextPreset, getPreviusPreset } from "./presetBank";

const Presets = () => {
	const [preset, setPreset] = useState({});

	useEffect(() => {
		setPreset(() => getDefaultPreset());
	}, []);

	return (
		<div className="presets centerIt flexColumn">
			<div className="preset-container control-container centerIt">
				<div className="centerIt flexColumn">
					<button className="nextTone" onClick={() => setPreset(getPreviusPreset(preset.id))} value="dn">
						[
					</button>
					<label htmlFor="nextTone">prev</label>
				</div>
				<div className="preset-text-container">
					<p className="preset-text">{preset.name}</p>
				</div>
				<div className="centerIt flexColumn">
					<button className="prevTone" onClick={() => setPreset(getNextPreset(preset.id))} value="up">
						]
					</button>
					<label for="prevTone">next</label>
				</div>
			</div>
			<p>
				<b>Preset</b>
			</p>
		</div>
	);
};

export default Presets;
