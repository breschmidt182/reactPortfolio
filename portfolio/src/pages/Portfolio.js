import PortfolioCards from '../components/PortfolioCards'
import workDayImg from '../images/wrkDaySched.png'
import whatsForDinner from '../images/whatsForDinner.jpg'
import eventBuddy from '../images/eventBuddy.png'
import runBuddy from '../images/runBuddy.png'
import pwaBudget	from '../images/pwaBudgetTracker.png'
import portfolio from '../images/portfolio.png'

function Portfolio(props) {
	return (
		<div className="tile is-ancestor">
			<PortfolioCards className="tile is-parent"
				title="Work Day Scheduler"
				img= {workDayImg}
				link="https://breschmidt182.github.io/work-day-scheduler/"
				repo="https://github.com/breschmidt182/work-day-scheduler"
			/>
			<PortfolioCards 
				title="What's For Dinner?"
				img={whatsForDinner}
				link="https://tristinnguyen.github.io/Whats-for-Dinner/"
				repo="https://github.com/TristinNguyen/Whats-for-Dinner"
			/>

			<PortfolioCards 
				title="Event Buddy"
				img={eventBuddy}
				link="https://breschmidt182.github.io/work-day-scheduler/"
				repo="https://github.com/breschmidt182/work-day-scheduler"
			/>

			<PortfolioCards 
				title="Run Buddy"
				img={runBuddy}
				link="https://breschmidt182.github.io/run-buddy/"
				repo="https://github.com/breschmidt182/run-buddy"
			/>

			<PortfolioCards 
				title="PWA Budget Tracker"
				img={pwaBudget}
				// link="https://breschmidt182.github.io/pwaBudgetTracker/"
				repo="https://github.com/breschmidt182/pwaBudgetTracker"
			/>

			<PortfolioCards 
				title="First Portfolio"
				img={portfolio}
				link="https://breschmidt182.github.io/my-portfolio//"
				repo="https://github.com/breschmidt182/my-portfolio"
			/>
		</div>
	)
}

export default Portfolio;