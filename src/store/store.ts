import { combineReducers, configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import * as api from '../config'
import { controlsReducer } from '../features/controls/controls-slice'
import { countryReducer } from '../features/countries/countries-slice'
import { detailsReducer } from '../features/details/details-slice'
import { themeReducer } from '../features/theme/theme-slice'

const rootReducers = combineReducers({
	theme: themeReducer,
	controls: controlsReducer,
	countries: countryReducer,
	details: detailsReducer,
})

export const store = configureStore({
	reducer: rootReducers,
	devTools: true,
	middleware: getDefaultMiddlware =>
		getDefaultMiddlware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			serializableCheck: false,
		}),
})

export type RootState = ReturnType<typeof rootReducers>
export type AddDispatch = typeof store.dispatch
export const useAppDispatch: () => AddDispatch = useDispatch
