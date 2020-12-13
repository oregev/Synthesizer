import React, { useState } from "react";

const Pan = () => {
	const [pan, setPan] = useState(0);
	return (
		<div className="masters centerIt flexColumn" style={{ backgroundColor: "#aaa" }}>
			<div className="master-container">
				<div className="centerIt">
					<label htmlFor="pan">
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
			</div>
		</div>
	);
};

export default Pan;
