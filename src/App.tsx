import { BrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import HomeRouter from "./navigation/router/HomeRouter"

function App() {

	return (
		<BrowserRouter basename="/vacay">
			<Layout>
				<HomeRouter />
			</Layout>
		</BrowserRouter>
	)
}

export default App
