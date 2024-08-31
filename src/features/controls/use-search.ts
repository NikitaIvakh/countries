import { useSelector } from 'react-redux'
import { useAppDispatch } from 'store/store'
import { selectSearch } from './controls-selectors'
import { setSearch } from './controls-slice'

type onSearch = React.ChangeEventHandler<HTMLInputElement>

export const useSearch = (): [string, onSearch] => {
	const dispatch = useAppDispatch()
	const search = useSelector(selectSearch)

	const handleSearch: onSearch = e => {
		dispatch(setSearch(e.target.value))
	}

	return [search, handleSearch]
}
