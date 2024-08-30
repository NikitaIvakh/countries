import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme, setTheme } from './themeSwitcherSlice'

const useTheme = () => {
	const dispatch = useDispatch()
	const theme = useSelector(selectTheme)

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	const toggleTheme = () =>
		dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

	return [theme, toggleTheme]
}

export default useTheme
