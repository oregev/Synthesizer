import React from "react";

export const Helper = () => {
	return (
		<div>
			<div className="helper-scr centerIt flexColumn">
				<h3>KEYBOARD LAYOUT</h3>
				<div className="helper-up centerIt">
					<div className="helper-vol">
						<div className="helper-label centerIt">
							<p>Vol</p>
						</div>
						<div className="helper-btn centerIt control-container">
							<div className="help-btn centerIt">-</div>
							<div className="help-btn centerIt">+</div>
						</div>
					</div>
					<div className="helper-pre">
						<div className="helper-label centerIt">
							<p>Preset</p>
						</div>
						<div className="helper-btn centerIt control-container">
							<div className="help-btn centerIt">[</div>
							<div className="help-btn centerIt">]</div>
						</div>
					</div>
					<div className="helper-oct">
						<div className="helper-label centerIt">
							<p>Octav</p>
						</div>
						<div className="helper-btn centerIt control-container">
							<div className="help-btn centerIt">,</div>
							<div className="help-btn centerIt">.</div>
						</div>
					</div>
				</div>

				<div className="helper-mid centerIt">
					<div className="helper-osc">
						<div className="helper-label centerIt">
							<p>Oscilator Type</p>
						</div>
						<div className="helper-btn centerIt control-container">
							<div className="help-btn centerIt">1</div>
							<div className="help-btn centerIt">2</div>
							<div className="help-btn centerIt">3</div>
							<div className="help-btn centerIt">4</div>
						</div>
					</div>
					<div className="helper-fil">
						<div className="helper-label centerIt">
							<p>Filter type</p>
						</div>
						<div className="helper-btn centerIt control-container">
							<div className="help-btn centerIt">m</div>
						</div>
					</div>
				</div>
				<div className="helper-dn">
					<div className="helper-btn centerIt control-container">
						<div className="help-btn centerIt">w</div>
						<div className="help-btn centerIt">e</div>
						<div className="help-btn centerIt">t</div>
						<div className="help-btn centerIt">y</div>
						<div className="help-btn centerIt">u</div>
					</div>
					<div className="helper-piano">
						<div className="help-whiteKeys">
							<div className="help-key help-whiteKey">C</div>
							<div className="help-key help-whiteKey">D</div>
							<div className="help-key help-whiteKey">E</div>
							<div className="help-key help-whiteKey">F</div>
							<div className="help-key help-whiteKey">G</div>
							<div className="help-key help-whiteKey">A</div>
							<div className="help-key help-whiteKey">B</div>
						</div>
						<div className="help-blackKeys">
							<div className="help-key help-blackKey">
								c<sup>#</sup>
							</div>
							<div className="help-key help-blackKey">
								d<sup>#</sup>
							</div>
							<div className="help-nokey help-blackKey"></div>
							<div className="help-key help-blackKey">
								f<sup>#</sup>
							</div>
							<div className="help-key help-blackKey">
								g<sup>#</sup>
							</div>
							<div className="help-key help-blackKey">
								a<sup>#</sup>
							</div>
						</div>
					</div>
					<div className="helper-btn centerIt control-container">
						<div className="help-btn centerIt">a</div>
						<div className="help-btn centerIt">s</div>
						<div className="help-btn centerIt">d</div>
						<div className="help-btn centerIt">f</div>
						<div className="help-btn centerIt">g</div>
						<div className="help-btn centerIt">h</div>
						<div className="help-btn centerIt">j</div>
					</div>
				</div>
			</div>
		</div>
	);
};
