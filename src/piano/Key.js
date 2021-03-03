import React, { useContext } from "react";
import { Engine } from "../engine/engine";
import { PresetsContext } from "../context/Presets";

export const Key = ({ note, ctx }) => {
	const presets = useContext(PresetsContext);
	const engine = new Engine(ctx, presets);

	const getClass = () => {
		if (note === null) {
			return `key key--minor nokey`;
		} else if (note.length > 1) {
			return `key key--minor`;
		} else {
			return `key key--major`;
		}
	};

	const getKey = () => {
		return note === null ? (
			<div className={getClass()}></div>
		) : (
			<div className={getClass()} onMouseDown={() => engine.play(note)} onMouseUp={() => engine.stop(note)}></div>
		);
	};
	return <div>{getKey()}</div>;
};
