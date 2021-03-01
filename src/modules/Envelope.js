import React, { useContext } from "react";
import { PresetsContext } from "../context/Presets";

export const Envelope = () => {
	const [presets, setPresets] = useContext(PresetsContext);
	const { attack, decay, sustain, relese } = presets; // Create envelope object !

	const setEnvelope = (e) => setPresets({ ...presets, [e.target.name]: +e.target.value });

	return (
		<div className="envelope presetContainer">
			<div>
				<label htmlFor="attack">ATTACK</label>
				<input
					id="attack"
					name="attack"
					onChange={(e) => setEnvelope(e)}
					type="range"
					min={1}
					max={100}
					value={attack}
				/>
			</div>
			<div>
				<label htmlFor="decay">DECAY</label>
				<input id="decay" name="decay" onChange={(e) => setEnvelope(e)} type="range" min={1} max={100} value={decay} />
			</div>
			<p>ENVELOPE</p>
		</div>
	);
};
