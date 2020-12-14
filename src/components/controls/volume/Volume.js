import React, { useState } from "react";

export const Volume = () => {
	const [volume, setVolume] = useState(1);

	const containerStyle = {
		padding: 10,
	};
	const labelStyle = {
		marginRight: 10,
	};

	return (
		<div className="volume-container" style={containerStyle}>
			<label htmlFor="vol" style={labelStyle}>
				<b>Vol</b>
			</label>
			<input
				className="vol"
				type="range"
				min="0"
				max="2"
				value={volume}
				step="0.01"
				onChange={(e) => setVolume(e.target.value)}
			/>
		</div>
	);
};
