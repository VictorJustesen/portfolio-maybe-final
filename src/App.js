import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Contact from "./components/contact/contact"
import Ability from "./components/ability/Ability"
function App() {
	return (
		<div className='App'>
			<Header/>
			<About/>
			<Ability/>
			
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;
