import { IoSearch } from 'react-icons/io5'
import './search.scss'
import { useSearch } from './use-search'

export const Search = () => {
	const [search, handleSearch] = useSearch()

	return (
		<label className='search__container'>
			<IoSearch />
			<input
				className='search__input'
				type='search'
				placeholder='Search for a country...'
				onChange={handleSearch}
				value={search}
			/>
		</label>
	)
}

export default Search
