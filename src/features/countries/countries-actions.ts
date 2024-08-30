import { createAsyncThunk } from '@reduxjs/toolkit'
import { Country, Extra } from 'types'
import { CountrySlice } from './countries-slice'

export const loadCountries = createAsyncThunk<
	// Axios => {data}
	{ data: Country[] },
	undefined,
	{
		state: { countries: CountrySlice }
		extra: Extra
		rejectValue: string
	}
>(
	'@@countries/load-countries',
	async (_, { extra: { client, api }, rejectWithValue }) => {
		try {
			return await client.get(api.ALL_COUNTRIES)
		} catch (e) {
			if (e instanceof Error) {
				return rejectWithValue(e.message)
			}

			return rejectWithValue('Unknown error')
		}
	},
	{
		condition: (_, { getState }) => {
			const {
				countries: { status },
			} = getState()
			if (status === 'loading') return false
		},
	}
)
