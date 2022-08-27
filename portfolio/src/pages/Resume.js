function Resume() {
	return (
		<div>
			<h1 className="title res">Resume</h1>
			<button className='pdfDownload'><a className='pdfDownload' href="../../public/images/webDevResume.pdf">Download Resume Here!</a></button>
			<h1 className="title">Tech Stack</h1>
			<ul className="techStack columns">
				<li className="column skill level-item">HTML, CSS, Javascript, jQuery
					<img className="resImg level-item" id="frontEnd" src={require('../images/frontEnd.jpg')}></img>
				</li>
				<li className="column skill level-item">Node.js, Jest, inquirer, Express, npms
					<img className="level-item" src={require('../images/backEnd.jpg')}></img>
				</li>
				<li className="column skill level-item">MySQL, Sequelize, Mongodb, Mongoose
					<img className="resImg level-item" id="db" src={require('../images/dataBase.jpg')}></img>
				</li>
				<li className="column skill level-item">Web APIs, Third-Party APIs, Server-Side APIs
					<img className="resImg level-item" src={require('../images/api.png')}></img>
				</li>
			</ul>
		</div>
		
	)
}



export default Resume;