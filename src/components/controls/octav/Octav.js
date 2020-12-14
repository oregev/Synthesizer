import React, { useState } from "react";
import "./octav.css";
const Octav = () => {
	const [octav, setOctav] = useState(0);

	const octavChange = (octavKey) => {
		if (octav < 3 && octavKey === "up") {
			setOctav((last) => last + 1);
		}
		if (octav > -3 && octavKey === "dn") {
			setOctav((last) => last - 1);
		}
	};

	return (
		<div className="octav centerIt flexColumn" style={{ backgroundColor: "#836" }}>
			<div className="octav-container control-container centerIt">
				<div className="centerIt flexColumn">
					<button
						className="octaveDn"
						onClick={() => {
							octavChange("dn");
						}}
					>{`<`}</button>
					<label htmlFor="octaveDn">Dn</label>
				</div>
				<div className="octav-text-container">
					<p className="octav-text">{octav}</p>
				</div>
				<div className="centerIt flexColumn">
					<button
						className="octaveUp"
						onClick={() => {
							octavChange("up");
						}}
					>{`>`}</button>
					<label htmlFor="octaveUp">Up</label>
				</div>
			</div>
			<p>
				<b>Octav</b>
			</p>
		</div>
	);
};

export default Octav;
