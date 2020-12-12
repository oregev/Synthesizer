const presets = [
	{
		id: 0,
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
		id: 1,
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
		id: 2,
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
		id: 3,
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

export const getPreviusPreset = (id) => {
	if (id === presets.length - 1 || id > 0) {
		id--;
	}
	return presets[id];
};

export const getNextPreset = (id) => {
	if (id === 0 || id < presets.length - 1) {
		id++;
	}
	return presets[id];
};

/* 
	Should add two more features:
	1. A "create new preset component"
	2. The ability to save a new preset
	to the browser local storage by
	stringifing the sound banks file.

*/
