import React, { useContext } from "react";
import { PresetsContext } from "../context/Presets";
import { getNextPreset, getPreviusPreset } from "../assets/presetBank";

export const Presets = () => {
	const [presets, setPresets] = useContext(PresetsContext);
	const { id, name } = presets;
	const setPreset = (dir) => {
		setPresets(dir === "dn" ? getPreviusPreset(id) : getNextPreset(id));
	};

	return (
		<div className="presets presetContainer">
			<div className="presets--controlsContainer">
				<div className="presets--controls">
					<button onClick={() => setPreset("dn")}>[</button>
					<p>PREV</p>
				</div>
				<div className="presets--nameContainer">
					<p>{name}</p>
				</div>
				<div className="presets--controls">
					<button onClick={() => setPreset("up")}>]</button>
					<p>NEXT</p>
				</div>
			</div>
			<p>PRESET</p>
		</div>
	);
};
