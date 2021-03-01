import React from "react";
import { Key } from "./Key";

const octavNotes = {
	major: ["c", "d", "e", "f", "g", "a", "b"],
	minor: ["c#", "d#", null, "f#", "g#,", "a#"],
};

export const Keyboard = () => {
	return (
		<div className="keyboard presetsContainer">
			<div className="keyboard--octav">
				<div className="keyboard--major">
					{octavNotes.major.map((note, i) => (
						<Key key={i} note={note} />
					))}
				</div>
				<div className="keyboard--minor">
					{octavNotes.minor.map((note, i) => (
						<Key key={i} note={note} />
					))}
				</div>
			</div>
		</div>
	);
};
