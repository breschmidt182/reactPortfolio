function Home() {
	return (
 <main>
	<section className="hero">
  	<div className="hero-body">
    	<p className="title">
      	Welcome to my portfolio
    	</p>
  	</div>
	</section>
	<div className="tile is-ancestor">
		<div className="tile is-4 is-vertical is-parent">
		<div className="tile is-child box">
				<p className="title">About Me</p>
				<a href="/about">
				<img src={require("../images/me.JPG")} alt='Breanna Schmidt'></img>
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
				<img src={require("../images/Img4homePg.jpg")} alt='Computer screen with lines of code on screen'></img>
				</a>
			</div>
		</div>
	</div>
 </main>
	)
}

export default Home;