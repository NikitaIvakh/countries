import { ReactNode } from 'react'
import './list.scss'

interface ListProps {
	children: ReactNode
}

const List = ({ children }: ListProps) => {
	return <section className='list'>{children}</section>
}

export default List
