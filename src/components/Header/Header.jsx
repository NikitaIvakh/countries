import { useEffect, useState } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
	const [isDarkTheme, setDarkTheme] = useState(false)
	const ThemeText = isDarkTheme ? 'Dark Theme' : 'Light Theme'
	const ThemeIcon = isDarkTheme ? IoMoon : IoMoonOutline

	useEffect(() => {
		document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light')
	}, [isDarkTheme])

	const toggleTheme = () => {
		setDarkTheme(!isDarkTheme)
	}

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<h2 className='header__title'>
						<Link to='/'>Where is the world?</Link>
					</h2>
					<div className='header__switcher' onClick={toggleTheme}>
						<ThemeIcon />
						<span>{ThemeText}</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
