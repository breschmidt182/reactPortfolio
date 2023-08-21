import PortfolioCards from '../components/PortfolioCards'
import workDayImg from '../images/wrkdaySched.png'
import whatsForDinner from '../images/WhatsForDinner.png'
import ecommerce from '../images/btsEcommerce.png'
import purrfectPetShop	from '../images/purrfectPetShop.png'


function Portfolio(props) {
	return (
		<div className="tile is-ancestor">
			<PortfolioCards className="tile is-parent tilt-in-top-1 "
				title="Work Day Scheduler"
				img= {workDayImg}
				description="Users can keep track of things they need to do or appointments coming up using this app. This app will save any entries you make as well as change color depending on whether the event is coming up or has passed."
				link="https://breschmidt182.github.io/work-day-scheduler/"
				repo="https://github.com/breschmidt182/work-day-scheduler"
			/>
			<PortfolioCards className="tile is-parent tilt-in-top-1 "
				title="What's For Dinner?"
				img={whatsForDinner}
				description="Use this app to generate new dinner recipes as well as generate a random cocktail to go with the user's meal"
				link="https://tristinnguyen.github.io/Whats-for-Dinner/"
				repo="https://github.com/TristinNguyen/Whats-for-Dinner"
			/>

			<PortfolioCards className="tile is-parent tilt-in-top-1 "
				title="Purrfect Pet Shop"
				img={purrfectPetShop}
				description="Users can use this app to shop for their cats. Instead of having to dig around for cat products on other online pet shops, there is now a shop specifically for cats"
				link="https://murmuring-springs-16959.herokuapp.com/"
				repo="https://github.com/Callmeicanhelp/PurrfectPetShop"
			/>

			<PortfolioCards className="tile is-parent tilt-in-top-1 "
				title="E-commerce Behind the Scenes "
				img={ecommerce}
				description="server side project for an ecommerce site"
				link="https://drive.google.com/file/d/1tCpjw1wCLH_AtUPtcVgm2Mo0DYfDWDJt/view"
				repo="https://github.com/breschmidt182/ecommerceBehindTheScenes"
			/>
		</div>
	)
}

export default Portfolio;