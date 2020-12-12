import React, { useState } from "react";

const Filter = () => {

	const [fillType, setFillType] = useState("lowpass")
	const [filterFreq, setFilterFreq] = useState(5000)


	const filterTypeChange = () => {
		if (fillType === "lowpass") {
			setFillType("highpass")
		} else if (fillType === "highpass") {
			setFillType("bandpass")
		} else if (fillType === "bandpass") {
			setFillType("lowshelf")
		} else if (fillType === "lowshelf") {
			setFillType("highshelf")
		} else if (fillType === "highshelf") {
			setFillType("peaking")
		} else if (fillType === "peaking") {
			setFillType("notch")
		} else if (fillType === "notch") {
			setFillType("allpass")
		} else if (fillType === "allpass") {
			setFillType("lowpass")
		}
	// 	document.getElementById("filter-name").innerHTML = fillType;
	// 	filterNode.type = fillType;
	};
	
	return (
		<div className="filter centerIt flexColumn">
			<div className="filter-change centerIt">
				<div className="fil-btn-container centerIt">
					<label htmlFor="change">change</label>
					<button className="change" onClick={()=> {filterTypeChange()}}>
						m
					</button>
				</div>
				<div className="filter-name-container centerIt">
					<p className="filter-name">{fillType}</p>
				</div>
			</div>

			<div className="filter-frequency-change filter-container centerIt">
				<label htmlFor="freq">Freq</label>
				<input
					className="fil freq"
					onChange={(e) => {setFilterFreq(+e.target.value)}}
					type="range"
					min="20"
					max="10000"
					value={filterFreq}
				/>
			</div>
			<p>
				<b>Filter</b>
			</p>
		</div>
	);
};

export default Filter;
