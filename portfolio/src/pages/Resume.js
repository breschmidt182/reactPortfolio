function Resume() {
	return (
		<div>
			<h1>Resume</h1>
			<button className='pdfDownload'><a href={require("../images/webDevResume.pdf")}>Download Resume Here!</a></button>
			<h1>Tech Stack</h1>
			<ul>
				<li>HTML, CSS, Javascript, jQuery</li>
				<li>Node.js, Jest, inquirer, Express, npms</li>
				<li>MySQL, Sequelize, Mongodb, Mongoose</li>
				<li>Web APIs, Third-Party APIs, Server-Side APIs </li>
			</ul>
		</div>
		
	)
}



export default Resume;