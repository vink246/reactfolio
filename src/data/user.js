const INFO = {
	main: {
		title: "Vineet Kulkarni Portfolio",
		name: "Vineet Kulkarni",
		email: "2vineetk@gmail.com",
		logo: `${process.env.PUBLIC_URL}/logo.png`,
	},

	socials: {
		// twitter: "https://twitter.com/",
		github: "https://github.com/vink246",
		linkedin: "https://www.linkedin.com/in/vineet-kulkarni-b8a80b24a/",
		instagram: "https://instagram.com/2vineet",
		// stackoverflow: "https://stackoverflow.com/",
		// facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Vineet Kulkarni: Software engineer, Robotics + AI researcher.",
		description:
			"I'm a software researcher and engineer from Georgia Tech passionate about advancing the fields of machine learning and robotics. I enjoy tackling complex problems and building innovative solutions, with experience ranging from Nueral Architecture Search to launching rockets.",
	},

	about: {
		title: "Hi! I'm Vineet.",
		description:
			"I'm a BS/MS student at Georgia Tech with a concentration in Robotics and Perception. I've worked on a diverse range of projects that have allowed me to grow as both a researcher and an engineer. From developing an automated Modeled Change Management tool at Amazon to building a wearable tech shirt for real-time human pose tracking, my projects reflect my passion for tackling complex challenges. I invite you to explore my work, and I'm always open to new ideas and collaboration!"
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible.",
		description:
			"Chronological collection of my publications.",
	},

	projects: [
		{
			id: "kinestri",
			title: "Kinestri",
			description:
				"A wearable tech shirt for real-time human pose tracking. This is an ongoing CreateX project at Georgia Tech.",
			logo: "https://cdn4.iconfinder.com/data/icons/new-technology-1/48/48_pixel-01-17-512.png",
			linkText: "View Project",
			link: "/projects/kinestri",
			detailedDescription: "Kinestri is a wearable technology project focused on real-time human pose tracking using a custom compression shirt. The shirt integrates six IMUs strategically placed across the body, each feeding motion data into an Xiao ESP32 microcontroller paired with a rechargeable battery. Both the controller and battery are magnetically mounted to the shirt for ease of use and a compact form factor. Once powered on, the system streams 36 data features (6 DOF × 6 IMUs) to a mobile app over Bluetooth. To create a dataset for training, we used Mediapipe Pose for extracting human joint angles from synchronized video recordings, aligned with IMU sensor timestamps. A time series regression model was then trained to map IMU data to estimated joint angles. Current work includes refining model accuracy, improving shirt hardware, and eventually enabling on-device inference for mobile real-time applications.",
			technologies: ["Python", "C++","OpenCV", "TensorFlow", "ESP32", "Bluetooth", "Computer Vision", "Mediapipe", "PCB Design", "Electronics"],
			images: [
				"https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=Kinestri+Shirt+Prototype",
				"https://via.placeholder.com/600x400/7ED321/FFFFFF?text=Pose+Tracking+Demonstration",
				"https://via.placeholder.com/600x400/F5A623/FFFFFF?text=Hardware+Integration"
			],
			//githubLink: "https://github.com/vink246/kinestri",
			status: "In Progress"
		},

		{
			id: "yellow-jacket-space",
			title: "Yellow Jacket Space Program",
			description:
				"The contributions I've made as software lead for the Yellow Jacket Space Program at Georgia Tech, a student-run liquid rocket program.",
			logo: "https://api.iconify.design/lucide:rocket.svg",
			linkText: "View Project",
			link: "/projects/yellow-jacket-space",
			detailedDescription: "As the software lead for the Yellow Jacket Space Program, I've developed critical flight software and ground support systems for liquid rocket launches. This includes telemetry systems, flight control algorithms, and data analysis tools that ensure mission success.",
			technologies: ["Rust", "Typescript", "Beaglebone", "Raspberry Pi", "Firmware", "Networking", "Linux", "Flight software"],
			images: [
				"https://via.placeholder.com/600x400/BD10E0/FFFFFF?text=Rocket+Launch+Preparation",
				"https://via.placeholder.com/600x400/50E3C2/FFFFFF?text=Flight+Control+Software",
				"https://via.placeholder.com/600x400/B8E986/FFFFFF?text=Telemetry+Data+Analysis"
			],
			githubLink: "https://github.com/gt-space/luna",
			status: "In Progress"
		},

		{
			id: "drawing-robot-arm",
			title: "Drawing Robot Arm",
			description:
				"A 2 DOF robot arm that can draw a cross hatched version of any image on a piece of paper.",
			logo: "https://cdn3.iconfinder.com/data/icons/filled-badge-vol2/100/32-128.png",
			linkText: "View Project",
			link: "/projects/drawing-robot-arm",
			detailedDescription: "This personal project is a custom 2 DOF robotic arm designed to convert any image into a cross-hatched drawing. I developed a simulator to optimize the arm’s dimensions for manufacturability and effective workspace coverage. The software pipeline includes an image preprocessing tool that converts colored images into cross-hatched vector instructions (similar to G-code for 3D printers). The arm’s motion is driven by inverse kinematics, which computes motor angles for precise end-effector positioning. Users can upload images through a Discord bot, which communicates with a Raspberry Pi Zero controlling the arm over Wi-Fi. The robot also features a local display and joystick interface for manual control and image selection.",
			technologies: ["Python", "Raspberry Pi", "OpenCV", "Servo Motors", "Stepper Motors", "3D Printing", "Electronics", "Kinematics", "Simulation", "Optimization"],
			images: [
				"https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=Robot+Arm+Assembly",
				"https://via.placeholder.com/600x400/7ED321/FFFFFF?text=Cross+Hatch+Drawing+Process",
				"https://via.placeholder.com/600x400/F5A623/FFFFFF?text=Final+Artwork+Result"
			],
			githubLink: "https://github.com/vink246/drawing-robot",
			status: "Completed"
		},

		{
			id: "pose-retargeting",
			title: "Pose Retargeting for humanoid robots",
			description:
				"A vertically integrated project at Georgia Tech's LIDAR Lab, focused on retargeting human motion data into feasible trajectories for the Digit humanoid robot.",
			logo: "https://cdn1.iconfinder.com/data/icons/video-production-2/64/motion_capture_movie_human_bones_action-512.png",
			linkText: "View Project",
			link: "/projects/pose-retargeting",
			detailedDescription: "This vertically integrated project at Georgia Tech’s LIDAR Lab focused on motion retargeting from human datasets to humanoid robots. Using the AMASS dataset of motion capture poses, we sought to map human motion into dynamically feasible trajectories for the Digit humanoid robot within the MuJoCo simulation environment. Our approach involved extracting end-effector key positions from human motion data, then optimizing a cost function that balanced human–robot positional similarity with robot kinematic constraints. This yielded feasible pose trajectories for Digit that closely resembled the original human motions. A reinforcement learning (RL) policy was then trained to follow these reference trajectories in rollout simulations, using end-effector waypoints and a low-level PD controller for stable execution.",
			technologies: ["Python", "ROS", "PyBullet", "Motion Capture", "Inverse Kinematics", "Control Theory"],
			images: [
				"https://via.placeholder.com/600x400/BD10E0/FFFFFF?text=Human+Motion+Capture",
				"https://via.placeholder.com/600x400/50E3C2/FFFFFF?text=Digit+Robot+Simulation",
				"https://via.placeholder.com/600x400/B8E986/FFFFFF?text=Retargeted+Motion+Execution"
			],
			githubLink: "https://github.com/vink246/pose-retargeting",
			status: "Completed"
		},

		{
			id: "gelsight-sensor",
			title: "Gelsight tactile sensor",
			description:
				"A LIDAR Lab project developing a custom Gelsight wedge sensor for integration into Digit's gripper for more precise object manipulation.",
			logo: "https://cdn3.iconfinder.com/data/icons/hands-set-1/84/56-128.png",
			linkText: "View Project",
			link: "/projects/gelsight-sensor",
			detailedDescription: "At the LIDAR Lab, I worked on developing a custom Gelsight tactile wedge sensor for robotic manipulation with the Digit humanoid robot. The sensor was built from a 3D-printed housing with embedded PCBs and a cast silicone gel. Markers were laser-etched into the gel to enable precise deformation tracking. Inside the housing, a miniature camera viewed the illuminated gel via a mirror. The camera streamed images to a Raspberry Pi Zero, which forwarded data to the main robot computer over the robot’s local network. Onboard, a computer vision algorithm estimated force vectors from gel deformation, providing the robot with tactile awareness during manipulation tasks. This system demonstrated the potential of low-cost, customizable tactile sensors for advanced robotic interaction.",
			technologies: ["Python", "OpenCV", "3D Printing", "Electronics", "Tactile Sensing", "Robotics"],
			images: [
				"https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=GelSight+Sensor+Prototype",
				"https://via.placeholder.com/600x400/7ED321/FFFFFF?text=Digit+Gripper+Integration",
				"https://via.placeholder.com/600x400/F5A623/FFFFFF?text=Tactile+Feedback+Visualization"
			],
			githubLink: "https://github.com/vink246/gelsight-sensor",
			status: "Completed"
		},
	],
};

export default INFO;
