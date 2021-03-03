const presets = [
	{
		id: 0,
		name: "default",
		volume: 50,
		octav: 0,
		ocsType: "sine",
		filter: {
			fillType: "lowpass",
			fillFreq: 1000,
		},
		envelope: {
			attack: 0,
			decay: 100,
			sustain: 20,
			relese: 50,
		},
	},
	{
		id: 1,
		name: "Peace",
		volume: 50,
		octav: 2,
		ocsType: "square",
		filter: {
			fillType: "highpass",
			fillFreq: 1500,
		},
		envelope: {
			attack: 10,
			decay: 0,
			sustain: 50,
			relese: 50,
		},
	},
	{
		id: 2,
		name: "Machine",
		volume: 50,
		octav: -1,

		ocsType: "triangle",
		filter: {
			fillType: "notch",
			fillFreq: 1000,
		},
		envelope: {
			attack: 0,
			decay: 100,
			sustain: 50,
			relese: 50,
		},
	},
	{
		id: 3,
		name: "Fight",
		volume: 50,
		octav: 2,
		ocsType: "sawtooth",
		filter: {
			fillType: "lowpass",
			fillFreq: 8000,
		},
		envelope: {
			attack: 0,
			decay: 100,
			sustain: 50,
			relese: 50,
		},
	},
];

export const getDefaultPreset = () => presets[0];

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
