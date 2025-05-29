import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./BAE-systems.png"
								alt="baesystems"
								className="work-image"
							/>
							<div className="work-title">BAE Systems</div>
							<div className="work-subtitle">
								Principal Software Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./thermo_king_logo.png"
								alt="thermoking"
								className="work-image"
							/>
							<div className="work-title">ThermoKing</div>
							<div className="work-subtitle">
								Software Engineering Manager
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>

						<div className="work">
							<img
								src="./sensata.png"
								alt="sensata"
								className="work-image"
							/>
							<div className="work-title">Sensata</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2015 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
