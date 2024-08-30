import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store/store'
import { Country } from 'types'
import { selectControls } from '../controls/controls-slice'
import { loadCountries } from './countries-actions'
import {
	selectCountriesInfo,
	selectVisibleCountries,
} from './countries-selectors'
import {} from './countries-slice'

export const useCountries = (): [
	Country[],
	ReturnType<typeof selectCountriesInfo>
] => {
	const dispatch = useAppDispatch()
	const controls = useSelector(selectControls)
	const { search, region } = controls
	const countries = useSelector((state: RootState) =>
		selectVisibleCountries(state, search, region)
	)

	const { status, error, qty } = useSelector(selectCountriesInfo)

	useEffect(() => {
		if (!qty) {
			dispatch(loadCountries())
		}
	}, [qty, dispatch])

	return [countries, { status, error, qty }]
}
