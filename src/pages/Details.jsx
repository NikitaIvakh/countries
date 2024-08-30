import axios from 'axios'
import { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button/Button'
import Info from '../components/Info/Info'
import { searchByCountry } from '../config'

const Details = () => {
	const { name } = useParams()
	const navigate = useNavigate()
	const [country, setCountry] = useState(null)

	useEffect(() => {
		axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
	}, [name])

	const goBack = () => {
		navigate(-1)
	}

	return (
		<div>
			<Button onClick={goBack}>
				<IoArrowBack /> Back
			</Button>
			{country && <Info {...country} navigate={navigate} />}
		</div>
	)
}

export default Details
