import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from './theme-selectors'
import { setTheme, Theme } from './theme-slice'

export const useTheme = (): [Theme, () => void] => {
	const dispatch = useDispatch()
	const theme = useSelector(selectTheme)

	const toggleTheme = () => {
		dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
	}

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return [theme, toggleTheme]
}
