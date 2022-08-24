function PortfolioCards(props) {
	return (
		<div>
			<card className="projects">
				<h1 style={{ fontSize: "30px", fontWeight: "bold", color: "blue"}}>
					{props.title}
				</h1>
				<img>
				  {props.image}
				</img>
				<h3>
					{props.description}
				</h3>
			</card>
		</div>
	)
}

export default PortfolioCards;