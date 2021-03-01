import React, { useState, useEffect, useRef } from "react";
import { PresetsProvider } from "../../context/Presets";

import { Engine } from "../../engine/engine";

import { Volume } from "../../modules/Volume";
import { Presets } from "../../modules/Presets";
import { Octav } from "../../modules/Octav";
import { Oscilator } from "../../modules/Oscilator";
import { Envelope } from "../../modules/Envelope";
import { Filter } from "../../modules/Filter";

import { Keyboard } from "../../keyboard/Keyboard";
import { keyToNote } from "../../engine/tools/keyToNote";
import { InfoScreen } from "../info/InfoScreen";

export const Synt = () => {
	const engine = useRef(new Engine());

	const [popupVis, setPopupVis] = useState(false);
	const handleKeyDown = (event) => engine.current.play(keyToNote(event.key));
	const handleKeyUp = () => engine.current.stop();

	useEffect(() => {
		document.addEventListener("keydown", (e) => handleKeyDown(e));
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", (e) => handleKeyDown(e));
			document.removeEventListener("keyup", handleKeyUp);
		};
	});

	return (
		<PresetsProvider>
			<div className="synt--pageContainer">
				<Volume />
				<Octav />
				<Presets />
				<Oscilator />
				<Filter />
				<Envelope />
				<Keyboard />
				{popupVis ? <InfoScreen setPopupVis={setPopupVis} /> : <></>}
				<div className="infoButton--container">
					<button className="infoButton--button" onClick={() => setPopupVis((lastState) => !lastState)}>
						i
					</button>
				</div>
			</div>
		</PresetsProvider>
	);
};
