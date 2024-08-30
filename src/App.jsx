import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Main from './components/Form/Main'
import Header from './components/Header/Header'
import Details from './pages/Details'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './styles/app.scss'

function App() {
	const [countries, setCountries] = useState([])

	return (
		<Router>
			<Header />
			<Main>
				<Routes>
					<Route
						path='/'
						element={
							<HomePage countries={countries} setCountries={setCountries} />
						}
					/>
					<Route path='/country/:name' element={<Details />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Main>
		</Router>
	)
}

export default App
