import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'store/store'
import { selectTheme } from './theme-selectors'
import { setTheme, Theme } from './theme-slice'

export const useTheme = (): [Theme, () => void] => {
	const dispatch = useAppDispatch()
	const theme = useSelector(selectTheme)

	const toggleTheme = () => {
		dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
	}

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return [theme, toggleTheme]
}
