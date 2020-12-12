import React, { useState } from "react";

const Octav = () => {
	return (
		<div className="octav centerIt flexColumn">
			<div className="octav-container control-container centerIt">
				<div className="centerIt flexColumn">
					<button className="octaveDn" onClick="octavChange('dn')">{`<`}</button>
					<label htmlFor="octaveDn">Dn</label>
				</div>
				<div className="octav-text-container">
					<p className="octav-text">0</p>
				</div>
				<div className="centerIt flexColumn">
					<button className="octaveUp" onClick="octavChange('up')">{`>`}</button>
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
