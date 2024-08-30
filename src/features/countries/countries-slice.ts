import { createSlice } from '@reduxjs/toolkit'
import { Country } from 'types'
import { Status } from '../../types/status'
import { loadCountries } from './countries-actions'

export type CountrySlice = {
	status: Status
	error: string | null
	list: Country[]
}

const initialState: CountrySlice = {
	status: 'idle',
	error: null,
	list: [],
}

const countrySlice = createSlice({
	name: '@@countries',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loadCountries.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(loadCountries.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload || 'Cannot load data'
			})
			.addCase(loadCountries.fulfilled, (state, action) => {
				state.status = 'received'
				state.list = action.payload.data
			})
	},
})

export const countryReducer = countrySlice.reducer
