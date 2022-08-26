function PortfolioCards(props) {
	return (
		<main className="card column">
			<h1 className="card-header-title">{props.title}</h1>
			<div className="card-image">
				<figure className="card-image">
					<img src={require(props.img)} />
				</figure>
			</div>
			<div className="media">
				<a className="media-left">
					{props.link}
				</a>
				<a className="media-right"> {props.repo}
					<figure className="card-header-icon">
						<img src={require("../images/icons/github.png")} />
					</figure>
				</a>
				</div>
			
			<section className="card-content">
				{props.description}
			</section>
		</main>
	)
}

export default PortfolioCards;