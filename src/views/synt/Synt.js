import React, { useState, useEffect, useContext } from "react";
import { PresetsContext } from "../../context/Presets";

import { Volume } from "../../modules/Volume";
import { Presets } from "../../modules/Presets";
import { Octav } from "../../modules/Octav";
import { Oscilator } from "../../modules/Oscilator";
import { Envelope } from "../../modules/Envelope";
import { Filter } from "../../modules/Filter";

import { Piano } from "../../piano/Piano";
import { KeyboardHandler } from "../../tools/keyboardHandler";
import { EngineHandler } from "../../engine/engineHandler";
import { Helper } from "../helper/Helper";

export const Synt = () => {
	const [presets] = useContext(PresetsContext);
	const audioContext = new AudioContext();
	const engineHandler = new EngineHandler(audioContext, presets);
	const keyboardHandler = new KeyboardHandler(engineHandler);
	keyboardHandler.init();

	useEffect(() => {
		engineHandler.setPresets(presets);
	}, [presets]);

	const [popupVis, setPopupVis] = useState(false);

	return (
		<div className="synt--pageContainer">
			<Volume />
			<Octav />
			<Presets />
			<Oscilator />
			<Filter />
			<Envelope />
			<Piano ctx={audioContext} />
			{popupVis ? <Helper setPopupVis={setPopupVis} /> : <></>}
			<div className="infoButton--container">
				<button className="infoButton--button" onClick={() => setPopupVis((lastState) => !lastState)}>
					i
				</button>
			</div>
		</div>
	);
};
