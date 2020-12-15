import React, { useState, useEffect } from "react";
import "./oscilator.css";

const Oscilator = () => {
	const [oscType, setOscType] = useState("");

	useEffect(() => {
		setOscType("sine");
	}, []);

	const oscTypeChange = (num) => {
		switch (num) {
			case 1: {
				setOscType("sine");
				break;
			}
			case 2: {
				setOscType("square");
				break;
			}
			case 3: {
				setOscType("sawtooth");
				break;
			}
			case 4: {
				setOscType("triangle");
				break;
			}
			default: {
				alert("osc type input not in range");
				break;
			}
		}
	};

	return (
		<div className="ocs-type">
			<div className="centerIt flexColumn control-container">
				<label htmlFor="sin">Sin</label>
				<button className="sin" name="oscType" onClick={() => oscTypeChange(1)}>
					1
				</button>
			</div>
			<div className="centerIt flexColumn control-container">
				<label htmlFor="squ">Squ</label>
				<button className="squ" name="oscType" onClick={() => oscTypeChange(2)}>
					2
				</button>
			</div>
			<div className="centerIt flexColumn control-container">
				<label htmlFor="saw">Saw</label>
				<button className="saw" name="oscType" onClick={() => oscTypeChange(3)}>
					3
				</button>
			</div>
			<div className="centerIt flexColumn control-container">
				<label htmlFor="tri">Tri</label>
				<button className="tri" name="oscType" onClick={() => oscTypeChange(4)}>
					4
				</button>
			</div>
			<p>
				<b>Osc Type</b>
			</p>
		</div>
	);
};

export default Oscilator;
