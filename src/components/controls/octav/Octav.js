import React, { useState } from "react";

const Octav = () => {

	const [ octav, setOctav ] = useState(0)

	const octavChange = (octavKey) => {
		let tempCount = octav;
		if ( octav < 3 && octavKey === "up") {
			tempCount++ ;
		} 
		if ( octav > -3 && octavKey === "dn") {
			tempCount--;
		}
		setOctav(tempCount)
	}

	return (
		<div className="octav centerIt flexColumn">
			<div className="octav-container control-container centerIt">
				<div className="centerIt flexColumn">
					<button className="octaveDn" onClick={() => {octavChange('dn')}}>{`<`}</button>
					<p>Dn</p>
				</div>
				<div className="octav-text-container">
					<p className="octav-text">{octav}</p>
				</div>
				<div className="centerIt flexColumn">
					<button className="octaveUp" onClick={() => {octavChange('up')}}>{`>`}</button>
					<p>Up</p>
				</div>
			</div>
			<p>
				<b>Octav</b>
			</p>
		</div>
	);
};

export default Octav;