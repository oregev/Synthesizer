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
