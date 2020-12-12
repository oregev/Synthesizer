import React, { useState, useEffect } from "react";

import { getDefaultPreset, getNextPreset, getPreviusPreset } from "./presetBank";

const Presets = () => {
	const [preset, setPreset] = useState(getDefaultPreset());

	//let defaultPreset = {};
	// useEffect(() => {
	// 	//current = getDefaultPreset();
	// 	defaultPreset = getDefaultPreset();
	// 	setPreset(defaultPreset);
	// 	// console.log(preset);
	// }, []);
	//setPreset(current);
	// const presetName = presets[0].name;
	// const { presetNum, ocsType, octav, fillType, filterNode, attack, decay, sustain, relese } = presets[0];

	const presetChange = (event) => {
		// if (event === "dn" && (presetNum === presets.length || presetNum > 0)) {
		// 	presetNum--;
		// } else if (event === "up" && (presetNum === 0 || presetNum < presets.length)) {
		// 	presetNum++;
		// }
		// presetName = presets[presetNum].presetName;
		// ocsType = presets[presetNum].ocsType;
		// octav = presets[presetNum].octav;
		// fillType = presets[presetNum].fillType;
		// filterNode.frequency.value = presets[presetNum].fillFreq;
		// attack = presets[presetNum].attack;
		// decay = presets[presetNum].decay;
		// sustain = presets[presetNum].sustain;
		// relese = presets[presetNum].relese;
		// presetName = presets[presetNum].name;
		// setPreset(presetName);
	};

	return (
		<div className="presets centerIt flexColumn">
			<div className="preset-container control-container centerIt">
				<div className="centerIt flexColumn">
					<button className="nextTone" onClick={(e) => presetChange(e)} value="dn">
						[
					</button>
					<label htmlFor="nextTone">prev</label>
				</div>
				<div className="preset-text-container">
					<p className="preset-text">{preset.name}</p>
				</div>
				<div className="centerIt flexColumn">
					<button className="prevTone" onClick={(e) => presetChange(e)} value="up">
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
