import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projectDetail.css";

const ProjectDetail = () => {
	const { projectId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Find the project by ID
	const project = INFO.projects.find(p => p.id === projectId);

	// If project not found, redirect to projects page
	if (!project) {
		navigate("/projects");
		return null;
	}

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.detailedDescription} />
				<meta
					name="keywords"
					content={project.technologies.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="project-detail-container">
						{/* Back Button */}
						<button 
							className="back-button" 
							onClick={() => navigate("/projects")}
						>
							<FontAwesomeIcon icon={faArrowLeft} />
							Back to Projects
						</button>

						{/* Project Header */}
						<div className="project-detail-header">
							<div className="project-detail-logo-large">
								<img src={project.logo} alt={project.title} />
							</div>
							<div className="project-detail-title-section">
								<h1 className="project-detail-title">{project.title}</h1>
								<div className="project-detail-status">
									<span className={`status-badge ${project.status.toLowerCase().replace(" ", "-")}`}>
										{project.status}
									</span>
								</div>
								<p className="project-detail-description">{project.description}</p>
							</div>
						</div>

						{/* Project Details */}
						<div className="project-detail-content">
							<div className="project-detail-section">
								<h2>About This Project</h2>
								<p className="project-detail-detailed-description">
									{project.detailedDescription}
								</p>
							</div>

							{/* Technologies */}
							<div className="project-detail-section">
								<h2>Technologies Used</h2>
								<div className="technologies-list">
									{project.technologies.map((tech, index) => (
										<span key={index} className="technology-tag">
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Project Images */}
							{project.images && project.images.length > 0 && (
								<div className="project-detail-section">
									<h2>Project Images</h2>
									<div className="project-images-grid">
										{project.images.map((image, index) => (
											<div key={index} className="project-image-container">
												<img 
													src={image} 
													alt={`${project.title} - Image ${index + 1}`}
													className="project-image"
												/>
											</div>
										))}
									</div>
								</div>
							)}

							{/* GitHub Link - Only show if project has a GitHub link */}
							{project.githubLink && project.githubLink.trim() !== "" && (
								<div className="project-detail-section">
									<h2>Source Code</h2>
									<a 
										href={project.githubLink} 
										target="_blank" 
										rel="noopener noreferrer"
										className="github-link"
									>
										<FontAwesomeIcon icon={faGithub} />
										View on GitHub
										<FontAwesomeIcon icon={faExternalLinkAlt} />
									</a>
								</div>
							)}
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

export default ProjectDetail;
