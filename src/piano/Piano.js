import React from "react";
import { Key } from "./Key";

export const Piano = ({ ctx }) => {
	const octavNotes = {
		major: ["c", "d", "e", "f", "g", "a", "b"],
		minor: ["c#", "d#", null, "f#", "g#", "a#"],
	};
	const fillKeys = (type) => octavNotes[type].map((note, i) => <Key key={i} note={note} ctx={ctx} />);
	return (
		<div className="keyboard presetsContainer centerIt">
			<div className="keyboard--octav">
				{/* <div className="keyboard--major">{fillKeys("major")}</div>
				<div className="keyboard--minor">{fillKeys("minor")}</div> */}
			</div>
		</div>
	);
};
