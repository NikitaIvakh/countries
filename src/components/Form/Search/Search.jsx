import { IoSearch } from 'react-icons/io5'
import './search.scss'

const Search = ({ search, setSearch }) => {
	const onChangeInput = event => {
		setSearch(event.target.value)
	}

	return (
		<div className='search'>
			<label htmlFor='search' className='search__container'>
				<IoSearch />
				<input
					id='search'
					name='search'
					type='search'
					value={search}
					className='search__input'
					placeholder='Search for a country...'
					onChange={event => onChangeInput(event)}
				/>
			</label>
		</div>
	)
}

export default Search
