import React, { useState } from "react";

const Envelope = () => {
	const [attack, setAttack] = useState(50);
	const [decay, setDecay] = useState(50);

	const containerStyle = {
		padding: 10,
	};
	const labelStyle = {
		marginRight: 10,
	};

	return (
		<div className="envelope centerIt flexColumn" style={containerStyle}>
			<div className="env-container centerIt" style={{ marginBottom: 10 }}>
				<label htmlFor="attack" style={labelStyle}>
					A
				</label>
				<input
					className="attack env"
					onChange={(e) => setAttack(+e.target.value)}
					type="range"
					min="1"
					max="100"
					value={attack}
				/>
			</div>
			<div className="env-container centerIt">
				<label htmlFor="decay" style={labelStyle}>
					D
				</label>
				<input
					className="decay env"
					onChange={(e) => setDecay(+e.target.value)}
					type="range"
					min="1"
					max="100"
					value={decay}
				/>
			</div>
			<p>
				<b>Evelope</b>
			</p>
		</div>
	);
};

export default Envelope;
