import React from "react";
import { Engine } from "../engine/engine";

export const Key = ({ note }) => {
	const engine = new Engine();

	const getClass = () => {
		if (note === null) {
			return `key key--minor nokey`;
		} else if (note.length > 1) {
			return `key key--minor`;
		} else {
			return `key key--major`;
		}
	};
	return <div className={getClass()} onMouseDown={() => engine.play(note)} onMouseUp={() => engine.stop(note)}></div>;
};
