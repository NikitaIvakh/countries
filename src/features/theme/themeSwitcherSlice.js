import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	theme: 'light',
}

const ThemeSwitcherSlice = createSlice({
	name: '@@theme',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload
		},
	},
})

export const { setTheme } = ThemeSwitcherSlice.actions
export const themeReducer = ThemeSwitcherSlice.reducer
export const selectTheme = state => state.theme.theme
