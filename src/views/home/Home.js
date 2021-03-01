import React from "react";
import "./home.css";

export const Home = ({ setView }) => {
	return (
		<div className="welcome-scr centerIt" onClick={() => setView(false)}>
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
