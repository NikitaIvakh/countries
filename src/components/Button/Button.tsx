import { ReactNode } from 'react'
import './button.scss'

interface ButtonProps {
	children: ReactNode
	onClick: () => void
}

const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button className={`button `} {...props}>
			{children}
		</button>
	)
}

export default Button
