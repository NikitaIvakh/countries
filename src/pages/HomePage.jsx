import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card/Card'
import Controls from '../components/Form/Controls/Controls'
import List from '../components/List/List'
import { ALL_COUNTRIES } from '../config'

const HomePage = ({ countries, setCountries }) => {
	const [filteredCountries, setFilteredCountries] = useState(countries)
	const navigate = useNavigate()

	const handleSearch = (search, region) => {
		let data = [...countries]

		if (region) {
			data = data.filter(item =>
				item.region.toLowerCase().includes(region.toLowerCase())
			)
		}

		if (search) {
			data = data.filter(
				item =>
					item.name.common.toLowerCase().includes(search.toLowerCase()) ||
					item.name.official.toLowerCase().includes(search.toLowerCase())
			)
		}

		setFilteredCountries(data)
	}

	useEffect(() => {
		if (!countries.length)
			axios.get(ALL_COUNTRIES).then(({ data }) => {
				setCountries(data)
			})
	}, [])

	useEffect(() => {
		handleSearch()
	}, [countries])

	return (
		<>
			<Controls handleSearch={handleSearch} />
			{countries.length > 0 ? (
				<List>
					{filteredCountries
						.sort((a, b) => a.name.common.localeCompare(b.name.common))
						.map((item, i) => {
							const countryInfo = {
								img: item.flags.svg,
								name: item.name.common,
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

							return (
								<Card
									key={i}
									{...countryInfo}
									onClick={() => navigate(`/country/${item.name.common}`)}
								/>
							)
						})}
				</List>
			) : (
				<p>Loading...</p>
			)}
		</>
	)
}

export default HomePage
