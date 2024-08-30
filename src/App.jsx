import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import Controls from './components/Form/Controls/Controls'
import Main from './components/Form/Main'
import Header from './components/Header/Header'
import List from './components/List/List'
import { ALL_COUNTRIES } from './config'
import './styles/app.scss'

function App() {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		axios.get(ALL_COUNTRIES).then(({ data }) => {
			setCountries(data)
		})
	}, [])

	return (
		<>
			<Header />
			<Main>
				<Controls />
				{countries.length > 0 ? (
					<List>
						{countries.map((item, i) => {
							const countryInfo = {
								img: item.flags.png,
								name: item.name.common || item.name.official,
								info: [
									{
										title: 'Population',
										description: item.population.toLocaleString(),
									},
									{
										title: 'Region',
										description: item.region,
									},
									{
										title: 'Capital',
										description: item.capital,
									},
								],
							}

							return <Card key={i} {...countryInfo} />
						})}
					</List>
				) : (
					<p>Loading...</p>
				)}
			</Main>
		</>
	)
}

export default App
