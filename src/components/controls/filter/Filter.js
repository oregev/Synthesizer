import React, { useState } from "react";

const Filter = () => {
	return (
		<div className="filter centerIt flexColumn">
			<div className="filter-change centerIt">
				<div className="fil-btn-container centerIt">
					<label htmlFor="change">change</label>
					<button className="change" onClick="filterTypeChange()">
						m
					</button>
				</div>
				<div className="filter-name-container centerIt">
					<p className="filter-name"></p>
				</div>
			</div>

			<div className="filter-frequency-change filter-container centerIt">
				<label htmlFor="freq">Freq</label>
				<input
					className="fil freq"
					onChange="filterFreqChange(this.value)"
					type="range"
					min="20"
					max="10000"
					value="4990"
				/>
			</div>
			<p>
				<b>Filter</b>
			</p>
		</div>
	);
};

export default Filter;

/* Filter */
/* This function responsible for filter type changes */
const filterTypeChange = () => {
	if (fillType === "lowpass") {
		fillType = "highpass";
	} else if (fillType === "highpass") {
		fillType = "bandpass";
	} else if (fillType === "bandpass") {
		fillType = "lowshelf";
	} else if (fillType === "lowshelf") {
		fillType = "highshelf";
	} else if (fillType === "highshelf") {
		fillType = "peaking";
	} else if (fillType === "peaking") {
		fillType = "notch";
	} else if (fillType === "notch") {
		fillType = "allpass";
	} else if (fillType === "allpass") {
		fillType = "lowpass";
	}
	document.getElementById("filter-name").innerHTML = fillType;
	filterNode.type = fillType;
};
/* This function responsible for filter frequency changes */
const filterFreqChange = (event) => {
	//filFreq = event * 200;
	filterNode.frequency.value = event; //filFreq;
	console.log(event);
};
