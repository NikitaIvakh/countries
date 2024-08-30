import Button from 'components/Button/Button'
import { CountryDetails } from 'features/details/CountryDetails'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
	const { name } = useParams()
	const navigate = useNavigate()

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			<CountryDetails name={name} navigate={navigate} />
		</div>
	)
}

export default Details
