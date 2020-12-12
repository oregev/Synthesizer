import React, { useState } from "react";

const Volume = () => {
	const [volume, setVolume] = useState(1);
	return (
		<div className="masters centerIt flexColumn">
			<div className="master-container">
				<div className="centerIt">
					<label htmlFor="vol">
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
			</div>
		</div>
	);
};

export default Volume;
