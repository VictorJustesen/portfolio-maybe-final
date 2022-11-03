import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Sideheaderright from "./components/sideheaderright/Sideheaderright"
import Contact from "./components/contact/Contact"
import Abilities from "./components/ability/Abilities"
import Landing from "./components/landing/Landing"
import Sideheaderleft from "./components/sideheaderleft/Sideheaderleft"
/*full page
typewriter*/ 

function App() {
	return (
		<div className='App'>
			<Sideheaderleft/>
			<Sideheaderright/>
			<Landing/>
			<About/>
			<Abilities/>
			
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;
