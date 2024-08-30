import { createSelector } from 'reselect'
import { RootState } from 'store/store'
import { Country } from 'types'

export const selectCountriesInfo = createSelector(
	(state: RootState) => state.countries.status,
	(state: RootState) => state.countries.error,
	(state: RootState) => state.countries.list.length,
	(status, error, qty) => ({
		status,
		error,
		qty,
	})
)

export const selectAllCountries = (state: RootState): Country[] =>
	state.countries.list

export const selectVisibleCountries = createSelector(
	selectAllCountries,
	(_: RootState, search: string) => search,
	(_: RootState, __: string, region: string) => region,
	(countries: Country[], search: string, region: string) =>
		countries.filter(
			(country: Country) =>
				country.name.toLowerCase().includes(search.toLowerCase()) &&
				country.region.includes(region)
		)
)
