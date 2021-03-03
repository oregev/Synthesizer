import React from "react";

export const Home = ({ setView }) => {
	return (
		<div className="welcome centerIt" onClick={() => setView(false)}>
			<h1 className="welcome--title">
				WELCOME
				<br />
				TO
				<br />
				<span className="welcome--text">Synt</span>
			</h1>
			<span>Press anywhere to start...</span>
		</div>
	);
};
