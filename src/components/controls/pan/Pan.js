import React, { useState } from "react";

export const Pan = () => {
	const [pan, setPan] = useState(0);

	const containerStyle = {
		padding: 10,
	};
	const labelStyle = {
		marginRight: 5,
	};

	return (
		<div className="pan-container" style={containerStyle}>
			<label htmlFor="pan" style={labelStyle}>
				<b>Pan</b>
			</label>
			<input
				className="pan"
				type="range"
				min="-1"
				max="1"
				value={pan}
				step="0.01"
				onChange={(e) => setPan(e.target.value)}
			/>
		</div>
	);
};
