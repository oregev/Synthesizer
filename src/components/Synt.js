import React, { useState } from "react";
import Welcome from "./welcome/Welcome";
import MainScreen from "./mainscreen/MainScreen";

const Synt = () => {
	const [toggleView, setToggleView] = useState(true);
	return <div>{toggleView ? <Welcome setToggleView={setToggleView} /> : <MainScreen />}</div>;
};

export default Synt;
