import './controls.scss'
import { CustomSelect } from './CustomSelect'
import { Search } from './Search'
import { useRegion } from './use-region'

const optionsMap = {
	Africa: { value: 'Africa', label: 'Africa' },
	America: { value: 'America', label: 'America' },
	Asia: { value: 'Asia', label: 'Asia' },
	Europe: { value: 'Europe', label: 'Europe' },
	Oceania: { value: 'Oceania', label: 'Oceania' },
}

const options = Object.values(optionsMap)

export const Controls = () => {
	const [region, handleSelect] = useRegion()

	return (
		<div className='controls'>
			<Search />
			<CustomSelect
				options={options}
				placeholder='Filter by Region'
				isClearable
				isSearchable={false}
				value={optionsMap[region] || ''}
				onChange={handleSelect}
			/>
		</div>
	)
}

export default Controls
