import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import './themeSwitcher.scss'
import useTheme from './useTheme'

const ThemeSwitcher = () => {
	const [theme, toggleTheme] = useTheme()

	return (
		<div className='themeSwitcher' onClick={toggleTheme}>
			{theme === 'light' ? (
				<IoMoonOutline size='14px' />
			) : (
				<IoMoon size='14px' />
			)}{' '}
			<span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
		</div>
	)
}

export default ThemeSwitcher
