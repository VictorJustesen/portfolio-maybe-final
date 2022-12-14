import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Sideheaderright from "./components/sideheaderright/Sideheaderright"
import Contact from "./components/contact/Contact"
import Abilities from "./components/ability/Abilities"
import Landing from "./components/landing/Landing"
import Sideheaderleft from "./components/sideheaderleft/Sideheaderleft"
import Nav from "./components/nav/Nav"


function App() {
	return (
		<div className='App'>
			<Sideheaderleft/>
			
			<Landing/>
			<About/>
			<Abilities/>
			<Nav/>
			<Contact/>
			<Footer/>
			<Sideheaderright/>
		</div>
	);
}

export default App;
