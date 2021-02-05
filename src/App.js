import "./App.css"
import Header from "./components/Header"
import Characters from "./screen/Characters"
import Home from "./screen/Home"

function App() {
	return (
		<div className="App">
			<Header />
			{/* router */}
			{/* <Home /> */}
			<Characters />
		</div>
	)
}

export default App
