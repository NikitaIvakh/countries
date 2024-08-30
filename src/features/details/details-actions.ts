import { createAsyncThunk } from '@reduxjs/toolkit'
import { Country, Extra } from 'types'
import { DetailsSlice } from './details-slice'

export const loadCountryByName = createAsyncThunk<
	{ data: Country[] },
	string,
	{
		extra: Extra
		state: { details: DetailsSlice }
		rejectValue: string
	}
>(
	'@@details/load-country-by-name',
	async (name, { extra: { client, api }, rejectWithValue }) => {
		try {
			return await client.get(api.searchByCountry(name))
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
				details: { status },
			} = getState()
			if (status === 'loading') return false
		},
	}
)

export const loadNeighborsByBorder = createAsyncThunk<
	{ data: Country[] },
	string[],
	{
		extra: Extra
		state: { details: DetailsSlice }
		rejectValue: string
	}
>(
	'@@details/load-neighbors',
	async (borders, { extra: { client, api }, rejectWithValue }) => {
		try {
			return await client.get(api.filterByCode(borders))
		} catch (e) {
			if (e instanceof Error) {
				return rejectWithValue(e.message)
			}

			return rejectWithValue('Unknown error')
		}
	}
)
