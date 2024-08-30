import Controls from './components/Form/Controls/Controls'
import Main from './components/Form/Main'
import Header from './components/Header/Header'
import './styles/app.scss'

function App() {
	return (
		<>
			<Header />
			<Main>
				<Controls />
			</Main>
		</>
	)
}

export default App
