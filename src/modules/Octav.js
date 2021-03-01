import React, { useContext } from "react";
import { PresetsContext } from "../context/Presets";

export const Octav = () => {
	const [presets, setPresets] = useContext(PresetsContext);
	const { octav } = presets;

	const octavChange = (octavKey) => {
		if (octavKey === "up" && octav < 3) {
			setPresets({ ...presets, octav: octav + 1 });
		}
		if (octavKey === "dn" && octav > -3) {
			setPresets({ ...presets, octav: octav - 1 });
		}
	};

	return (
		<div className="octav presetContainer">
			<div className="octav--controlsContainer">
				<div className="octav--controls">
					<button onClick={() => octavChange("dn")}>{`↓`}</button>
					<p>DOWN</p>
				</div>
				<div className="octav--nameContainer">
					<p>{octav}</p>
				</div>
				<div className="octav--controls">
					<button onClick={() => octavChange("up")}>{`↑`}</button>
					<p>UP</p>
				</div>
			</div>
			<p>OCTAV</p>
		</div>
	);
};
