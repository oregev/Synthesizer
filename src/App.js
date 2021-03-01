import React, { useState, useEffect } from "react";
import { Home } from "./views/home/Home";
import { Synt } from "./views/synt/Synt";

import "./App.css";

function App() {
	const [view, setView] = useState(true);

	return <div>{view ? <Home setView={setView} /> : <Synt />}</div>;
}

export default App;
