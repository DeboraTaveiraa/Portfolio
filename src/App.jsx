import { Outlet } from "react-router-dom";
import PersonalCard from "./components/PersonalCard";
import "./App.css"

function App() {
	return (
		<div className="app">
			<div className="app__container">
				<PersonalCard />
				<Outlet />
			</div>
		</div>
	)
}

export default App;