import React from "react";
import "./welcome.css";
const Welcome = ({ setToggleView }) => {
	return (
		<div className="welcome-scr centerIt" onClick={() => setToggleView((last) => !last)}>
			<h2>
				WELCOME
				<br />
				TO
				<br />
				<span>Synt</span>
			</h2>
			<p>Press anywhere to start...</p>
		</div>
	);
};

export default Welcome;
