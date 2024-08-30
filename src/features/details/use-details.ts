import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'store/store'
import { loadCountryByName } from './details-actions'
import { selectDetails } from './details-selectors'
import { clearDetails, DetailsSlice } from './details-slice'

export const useDetails = (name: string): DetailsSlice => {
	const dispatch = useAppDispatch()
	const details = useSelector(selectDetails)

	useEffect(() => {
		dispatch(loadCountryByName(name))

		return () => {
			dispatch(clearDetails())
		}
	}, [name, dispatch])

	return details
}
