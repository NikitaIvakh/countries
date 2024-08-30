import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card/Card'
import Controls from '../components/Form/Controls/Controls'
import List from '../components/List/List'
import { ALL_COUNTRIES } from '../config'

const HomePage = ({ countries, setCountries }) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (!countries.length)
			axios.get(ALL_COUNTRIES).then(({ data }) => {
				setCountries(data)
			})
	})

	return (
		<>
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

						return (
							<Card
								key={i}
								{...countryInfo}
								onClick={() =>
									navigate(`/country/${item.name.common || item.name.official}`)
								}
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
