const presets = [
	{
		name: "Default",
		ocsType: "sine",
		octav: 0,
		fillType: "lowpass",
		fillFreq: 1000,
		attack: 0,
		decay: 100,
		sustain: 20,
		relese: 50,
	},
	{
		name: "Peace",
		ocsType: "square",
		octav: 2,
		fillType: "highpass",
		fillFreq: 1500,
		attack: 10,
		decay: 0,
		sustain: 50,
		relese: 50,
	},
	{
		name: "Machine",
		ocsType: "triangle",
		octav: -1,
		fillType: "notch",
		fillFreq: 1000,
		attack: 0,
		decay: 100,
		sustain: 50,
		relese: 50,
	},
	{
		name: "Fight",
		ocsType: "sawtooth",
		octav: 2,
		fillType: "lowpass",
		fillFreq: 8000,
		attack: 0,
		decay: 100,
		sustain: 50,
		relese: 50,
	},
];

export const getDefaultPreset = () => {
	return presets[0];
};

export const getNextPreset = () => {
	return "next";
};

export const getPreviusPreset = () => {
	return "previus";
};
