function Home() {
	return (
		// <section>
		// 	<div>
		// 	<h1 style={{color:"#658E9C"}}>About Me</h1>
		// 	<img alt="Shows Breanna Schmidt">
		// 	</img>
		// 	</div>

		// 	<div>
		// 		<h1 style={{color:"#658E9C"}}>A Brief Look at My Projects</h1>
		// 		<img alt="Projects">
		// 		</img>
		// 	</div>

		// 	<div>
		// 		<div>
		// 			<h1 style={{color:"#658E9C"}}> Have Questions?</h1>
		// 			<h3>Please go to the Contact section and send me a message!</h3>
		// 		</div>
		// 	</div>
		// </section>
	<div className="tile is-ancestor">
		<div className="tile is-4 is-vertical is-parent">
		<div className="tile is-child box">
				<p className="title">About Me</p>
				<a href="/about">
				<img src={require("../images/me.JPG")}></img>
				</a>
			</div>

			<div className="tile is-child box">
				<p className="title">Contact Me</p>
				<a href="/contact">
					<p>Please follow the link and feel free to send me a message! Or find me at the links found in the footer.</p>
				</a>
			</div>
		</div>
		<div className="tile is-parent">
			<div className="tile is-child box">
				<p className="title">A Brief Look at My Projects</p>
				<a href="/portfolio">
				<img src={require("../images/Img4homePg.jpg")}></img>
				</a>
			</div>
		</div>
	</div>
	)
}

export default Home;