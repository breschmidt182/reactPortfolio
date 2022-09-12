// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header>
				<Navigation /> 
				<Container>
					<Router>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<AboutMe />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/portfolio" element={<Portfolio />} />
							<Route path="/resume" element={<Resume />} />
						</Routes>
					</Router>
				</Container>
      </header>
			<Footer />
    </div>
  );
}

export default App;
