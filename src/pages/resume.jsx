import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/resume.css";

const Resume = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO?.description || "Vineet Kulkarni's Resume"} />
				<meta
					name="keywords"
					content={currentSEO?.keywords?.join(", ") || "resume, cv, vineet kulkarni"}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="resume-logo-container">
						<div className="resume-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="resume-main-container">
						<div className="title resume-title">
							Resume
						</div>

						<div className="subtitle resume-subtitle">
							Download or view my resume below
						</div>

						<div className="resume-container">
							<div className="resume-pdf-container">
								<iframe
									src={`${process.env.PUBLIC_URL}/resume.pdf`}
									width="100%"
									height="800px"
									title="Vineet Kulkarni Resume"
									className="resume-pdf"
								/>
							</div>

							<div className="resume-download-container">
								<a
									href={`${process.env.PUBLIC_URL}/resume.pdf`}
									download="Vineet_Kulkarni_Resume.pdf"
									className="resume-download-button"
								>
									Download Resume
								</a>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
