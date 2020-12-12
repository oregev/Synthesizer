import React, { useState } from "react";

const Oscilator = () => {
	const [oscType, setOscType] = useState("sin");

	return (
		<div className="ocs-type">
			<div className="centerIt flexColumn control-container">
				<label htmlFor="sin">Sin</label>
				<button className="sin" name="oscType" onClick={() => setOscType(this.value)} value="sin">
					1
				</button>
			</div>
			<div className="centerIt flexColumn control-container">
				<label htmlFor="squ">Squ</label>
				<button className="squ" name="oscType" onClick={() => setOscType(this.value)} value="squ">
					2
				</button>
			</div>
			<div className="centerIt flexColumn control-container">
				<label htmlFor="saw">Saw</label>
				<button className="saw" name="oscType" onClick={() => setOscType(this.value)} value="saw">
					3
				</button>
			</div>
			<div className="centerIt flexColumn control-container">
				<label htmlFor="tri">Tri</label>
				<button className="tri" name="oscType" onClick={() => setOscType(this.value)} value={"tri"}>
					4
				</button>
			</div>
			<p>
				<b>Osc Type: {oscType}</b>
			</p>
		</div>
	);
};

export default Oscilator;
