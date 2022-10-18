import PortfolioCards from '../components/PortfolioCards'
import workDayImg from '../images/wrkDaySched.png'
import whatsForDinner from '../images/whatsForDinner.jpg'
import eventBuddy from '../images/eventBuddy.png'
import ecommerce from '../images/ecommerceBTS.png'
import purrfectPetShop	from '../images/PurrfectPetShop.png'
import portfolio from '../images/portfolio.png'

function Portfolio(props) {
	return (
		<div className="tile is-ancestor">
			<PortfolioCards className="tile is-parent"
				title="Work Day Scheduler"
				img= {workDayImg}
				description="Users can keep track of things they need to do or appointments coming up using this app. This app will save any entries you make as well as change color depending on whether the event is coming up or has passed."
				link="https://breschmidt182.github.io/work-day-scheduler/"
				repo="https://github.com/breschmidt182/work-day-scheduler"
			/>
			<PortfolioCards className="tile is-parent"
				title="What's For Dinner?"
				img={whatsForDinner}
				description="Use this app to generate new dinner recipes as well as generate a random cocktail to go with the user's meal"
				link="https://tristinnguyen.github.io/Whats-for-Dinner/"
				repo="https://github.com/TristinNguyen/Whats-for-Dinner"
			/>

			<PortfolioCards className="tile is-parent"
				title="Event Buddy"
				img={eventBuddy}
				description="The idea for this app was to create something users could use to find events near them. Whether it was a concert or someone trying to find enough people to play a basketball game. Currently not fully functional due to a lack of time."
				link="https://murmuring-springs-16959.herokuapp.com/"
				repo="https://github.com/cmskorcz/bootcamp_project_2"
			/>

			<PortfolioCards className="tile is-parent"
				title="Purrfect Pet Shop"
				img={purrfectPetShop}
				description="Users can use this app to shop for their cats. Instead of having to dig around for cat products on other online pet shops, there is now a shop specifically for cats"
				link="https://murmuring-springs-16959.herokuapp.com/"
				repo="https://github.com/cmskorcz/bootcamp_project_2"
			/>

			<PortfolioCards className="tile is-parent"
				title="E-commerce Behind the Scenes "
				img={ecommerce}
				description="server side project for an ecommerce site"
				link="https://drive.google.com/file/d/1tCpjw1wCLH_AtUPtcVgm2Mo0DYfDWDJt/view"
				repo="https://github.com/breschmidt182/ecommerceBehindTheScenes"
			/>

			<PortfolioCards className="tile is-parent"
				title="First Portfolio"
				img={portfolio}
				description="A landing page used to showcase some of the skills and projects of the Web Developer"
				link="https://breschmidt182.github.io/my-portfolio//"
				repo="https://github.com/breschmidt182/my-portfolio"
			/>
		</div>
	)
}

export default Portfolio;