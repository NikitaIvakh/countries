import { useState } from 'react'
import { CustomSelect } from '../CustomSelect'
import Search from '../Search/Search'
import './controls.scss'

const options = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
]

const Controls = () => {
	const [search, setSearch] = useState('')
	const [region, setRegion] = useState('')

	return (
		<div className='controls__wrapper'>
			<Search search={search} setSearch={setSearch} />
			<CustomSelect
				options={options}
				placeholder='Filter by Region'
				isClearable
				isSearchable={false}
				value={region}
				onChange={setRegion}
			/>
		</div>
	)
}

export default Controls
