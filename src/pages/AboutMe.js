function About() {
	return (
		<div className="content">
			<h1>About Me</h1>
			<div className="me">
				<img id="meImg" alt="Breanna Schmidt" src={require("../images/me.JPG")}></img>
			</div>
			<h2>Junior Full Stack Web Developer with the goal to build a more intuitive user experience on the web. Earned a certificate in full stack development from Michigan State University. Skills in JavaScript, CSS, HTML, Node.js, Mongodb, Express, React, and responsive web design. Innovative problem solver who enjoys developing apps while also focusing on making sure the app has a mobile-first design and development. The top priority for every project is to make sure that the user has a good experience with the app. In a recent project flex box was used to make sure that the app would be easy to use on any device they may be on. The project had a team of four to develop a web app to help the user come up with a recipe for dinner using ingredients they already had in their fridge. Incredibly excited to use my new skills in a fast-paced environment with a quality-driven and hard working team to build a better experience on the web for all users.</h2>
		</div>
	)
}

export default About;