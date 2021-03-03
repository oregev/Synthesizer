import React, { useState } from "react";
import { PresetsProvider } from "./context/Presets";
import { Home } from "./views/home/Home";
import { Synt } from "./views/synt/Synt";
import "./App.css";

function App() {
	const [view, setView] = useState(true);
	return (
		<PresetsProvider>
			<div>{view ? <Home setView={setView} /> : <Synt />}</div>
		</PresetsProvider>
	);
}

export default App;
