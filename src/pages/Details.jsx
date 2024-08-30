import { useParams } from 'react-router-dom'

const Details = () => {
	const { name } = useParams()
	return (
		<div>
			<h1>Details for {name}</h1>
		</div>
	)
}

export default Details
