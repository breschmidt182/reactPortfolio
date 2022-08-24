import PortfolioCards from '../components/PortfolioCards'

function Portfolio(props) {
	return (
		<div>
			<card className="projects">
				<PortfolioCards title="Employee Tracker" />
				<image src="portfolio\src\images\employeeTracker.jpg" alt="Shows employees in a web and how they are connected"></image>
			</card>
		</div>
	)
}

export default Portfolio;