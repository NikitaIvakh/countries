import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { themeReducer } from '../features/theme/themeSwitcherSlice'

const rootReducers = combineReducers({
	theme: themeReducer,
})

const store = configureStore({
	reducer: rootReducers,
	devTools: process.env.NODE_ENV !== 'production',
})

export default store
