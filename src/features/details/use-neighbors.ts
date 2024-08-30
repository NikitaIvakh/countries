import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'store/store'
import { loadNeighborsByBorder } from './details-actions'
import { selectNeighbors } from './details-selectors'
import {} from './details-slice'

export const useNeighbors = (borders: string[] = []): string[] => {
	const dispatch = useAppDispatch()
	const neighbors = useSelector(selectNeighbors)

	useEffect(() => {
		if (borders.length) {
			dispatch(loadNeighborsByBorder(borders))
		}
	}, [borders, dispatch])

	return neighbors
}
