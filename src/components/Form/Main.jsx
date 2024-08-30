import './main.scss'

const Main = ({ children }) => {
	return (
		<main className='main'>
			<div className='container'>{children}</div>
		</main>
	)
}

export default Main
