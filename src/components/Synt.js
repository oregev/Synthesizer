import React, { useState } from "react";
import Welcome from "./welcome/Welcome";
import MainScreen from "./mainscreen/MainScreen";

import "./synt.css";

const Synt = () => {
	const [toggleView, setToggleView] = useState(true);
	return <div className="syntPage">{toggleView ? <Welcome setToggleView={setToggleView} /> : <MainScreen />}</div>;
};

export default Synt;
