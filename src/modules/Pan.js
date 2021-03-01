import React, { useState } from "react";

export const Pan = () => {
	const [pan, setPan] = useState(0);

	return (
		<div className="panContainer controls">
			<label htmlFor="pan">
				<b>Pan</b>
			</label>
			<input
				name="pan"
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
