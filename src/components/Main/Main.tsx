import { ReactNode } from 'react'
import './main.scss'

interface MainProps {
	children: ReactNode
}

const Main = ({ children }: MainProps) => {
	return (
		<main className='main'>
			<div className='container'>{children}</div>
		</main>
	)
}

export default Main
