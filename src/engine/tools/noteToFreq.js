export const noteToFreq = (note) => {
	const keyToFrequency = (noteNumber) => Math.pow(2, (noteNumber - 49) / 12) * 440;

	const keyNumber = (note) => {
		const octavShift = 0; //3 * 7;
		switch (note) {
			case "c": {
				return 40 + octavShift;
			}
			case "c#": {
				return 41 + octavShift;
			}
			case "d": {
				return 42 + octavShift;
			}
			case "d#": {
				return 43 + octavShift;
			}
			case "e": {
				return 44 + octavShift;
			}
			case "f": {
				return 45 + octavShift;
			}
			case "f#": {
				return 46 + octavShift;
			}
			case "g": {
				return 47 + octavShift;
			}
			case "g#": {
				return 48 + octavShift;
			}
			case "a": {
				return 49 + octavShift;
			}
			case "a#": {
				return 50 + octavShift;
			}
			case "b": {
				return 51 + octavShift;
			}
			default: {
				break;
			}
		}
	};

	return keyToFrequency(keyNumber(note));
};
