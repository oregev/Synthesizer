import React, { useContext } from "react";
import { PresetsContext } from "../context/Presets";

export const Volume = () => {
	const [presets, setPresets] = useContext(PresetsContext);
	const { volume } = presets;

	return (
		<div className="volume presetContainer">
			<label htmlFor="volume">VOLUME</label>
			<input
				name="volume"
				className="volume"
				type="range"
				min={0}
				max={2}
				value={volume}
				step={0.01}
				onChange={(e) => setPresets({ ...presets, volume: +e.target.value })}
			/>
		</div>
	);
};
