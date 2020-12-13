import React, { useState } from "react";

const Envelope = () => {
	const [attack, setAttack] = useState(50);
	const [decay, setDecay] = useState(50);

	return (
		<div className="envelope centerIt flexColumn" style={{ backgroundColor: "#3cb" }}>
			<div className="env-container centerIt">
				<label htmlFor="attack">A</label>
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
				<label htmlFor="decay">D</label>
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
