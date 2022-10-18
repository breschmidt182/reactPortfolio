import pdf from '../webDevResume.pdf'
function Resume() {
	return (
		<div className='content'>
			<div>
				<h1 className="title res">Resume</h1>
				<button className='pdfDownload'><a className='pdfDownload' href={pdf} target="_blank" rel='noreferrer' >Download Resume Here!</a></button>
				<h1 className="title">Tech Stack</h1>
				<ul className="techStack columns">
					<li className="column skill level-item">HTML, CSS, Javascript, jQuery
						<img className="resImg level-item" id="frontEnd" src={require('../images/frontEnd.jpg')} alt="front end"></img>
					</li>
					<li className="column skill level-item">Node.js, Jest, inquirer, Express, npms
						<img className="level-item" src={require('../images/backEnd.jpg')} alt="back end"></img>
					</li>
					<li className="column skill level-item">MySQL, Sequelize, Mongodb, Mongoose
						<img className="resImg level-item" id="db" src={require('../images/dataBase.jpg')} alt="database"></img>
					</li>
					<li className="column skill level-item">Web APIs, Third-Party APIs, Server-Side APIs
						<img className="resImg level-item" src={require('../images/api.png')} alt="api"></img>
					</li>
				</ul>
			</div>
			{/* <div className='content is-normal strengthsLi'>
				<h1 className='title'>Strengths</h1>
					<ul className="column level-item" id="leftLi">
						<h2>Front-end:</h2>
						<li>HTML</li>
						<li>CSS</li>
						<li>React</li>
						<li>Javascript</li>
						<li>Mobile first design</li>
						<li>Third party API integration</li>
						<li>Server side APIs</li>
					</ul>
					<ul className="column level-item" id="centerLi">
						<h2>Back-end:</h2>
						<li>Mongodb</li>
						<li>Mongoose</li>
						<li>RESTful APIs</li>
						<li>Node js</li>
						<li>Express</li>
						<li>Insomnia</li>
						<li>OOP</li>
						<li>npm</li>
					</ul>
					<ul className="column level-item" id="rightLi">
						<h2>Other:</h2>
						<li>Git bash</li>
						<li>Github</li>
						<li>Git workflow</li>
						<li>Analytical skills</li>
						<li>Strong communication skills</li>
					</ul>
			</div> */}
		</div>
		
	)
}



export default Resume;