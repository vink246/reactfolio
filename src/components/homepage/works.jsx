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
								src={`${process.env.PUBLIC_URL}/amazon.png`}
								alt="amazon"
								className="work-image"
							/>
							<div className="work-title">Amazon</div>
							<div className="work-subtitle">
								SDE Intern
							</div>
							<div className="work-duration">2025</div>
						</div>

						<div className="work">
							<img
								src={`${process.env.PUBLIC_URL}/gtri.png`}
								alt="gtri"
								className="work-image"
							/>
							<div className="work-title">Georgia Tech Research Institute</div>
							<div className="work-subtitle">
								Research Intern
							</div>
							<div className="work-duration">2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
