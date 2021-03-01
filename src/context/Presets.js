import React, { useState, createContext } from "react";
import { getDefaultPreset } from "../assets/presetBank";

export const PresetsContext = createContext();

export const PresetsProvider = (props) => {
	const [presets, setPresets] = useState(() => getDefaultPreset());

	return <PresetsContext.Provider value={[presets, setPresets]}>{props.children}</PresetsContext.Provider>;
};
