function PortfolioCards(props) {
	return (
		<main className="card tile is-child box is-4 is-vertical is-variable is-2-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd">
			<h1 className="card-header-title is-spaced">{props.title}</h1>
			<div className="card-image">
				<figure className="card-image">
					<img src={props.img} />
				</figure>
			</div>
			<div className="media">
			 <button><a className="media-left" href={props.link}>Click Here to View Project</a></button>
				<a className="media-right" href={props.repo}> 
						<img className="icons" src={require("../images/icons/github.png")} />
				</a>
				</div>
			
			<section className="card-content">
				{props.description}
			</section>
		</main>
	)
}

export default PortfolioCards;