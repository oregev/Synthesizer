import React, { useState } from "react";

const Octav = () => {

	const [ octav, setOctav ] = useState(0)

	const octavChange = (octavKey) => {
		if ( octav < 3 && octavKey === "up") {
			setOctav(last => last++)
		} 
		if ( octav > -3 && octavKey === "dn") {
			setOctav(last => last--)
		}
	}

	return (
		<div className="octav centerIt flexColumn">
			<div className="octav-container control-container centerIt">
				<div className="centerIt flexColumn">
					<button className="octaveDn" onClick={() => {octavChange('dn')}}>{`<`}</button>
					<label htmlfor="octaveDn">Dn</label>
				</div>
				<div className="octav-text-container">
					<p className="octav-text">{octav}</p>
				</div>
				<div className="centerIt flexColumn">
					<button className="octaveUp" onClick={() => {octavChange('up')}}>{`>`}</button>
					<label htmlfor="octaveUp">Up</label>
				</div>
			</div>
			<p>
				<b>Octav</b>
			</p>
		</div>
	);
};

export default Octav;