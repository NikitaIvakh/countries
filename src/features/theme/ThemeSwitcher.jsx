import React from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import './themeSwitcher.scss'
import { useTheme } from './use-theme'

export const ThemeSwitcher = () => {
	const [theme, toggleTheme] = useTheme()

	return (
		<div className='theme-switcher' onClick={toggleTheme}>
			{theme === 'light' ? (
				<IoMoonOutline size='14px' className='theme-switcher__icon' />
			) : (
				<IoMoon size='14px' className='theme-switcher__icon' />
			)}
			<span>{theme} Theme</span>
		</div>
	)
}

export default ThemeSwitcher
