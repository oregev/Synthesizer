export const keyToNote = (key) => {
	switch (key) {
		case "a":
			return "c";
		case "w":
			return "c#";
		case "s":
			return "d";
		case "e":
			return "d#";
		case "d":
			return "e";
		case "f":
			return "f";
		case "t":
			return "f#";
		case "g":
			return "g";
		case "y":
			return "g#";
		case "h":
			return "a";
		case "u":
			return "a#";
		case "j":
			return "b";
		default:
			return 0;
	}
};
