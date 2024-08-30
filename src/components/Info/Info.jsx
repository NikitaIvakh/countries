import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { filterByCode } from '../../config'
import './info.scss'

const Info = props => {
	const {
		name,
		flags,
		capital,
		population,
		region,
		subregion,
		tld = [],
		currencies = {},
		languages = {},
		borders = [],
		navigate,
	} = props

	const [neighbors, setNeighbors] = useState([])

	useEffect(() => {
		if (borders.length) {
			axios
				.get(filterByCode(borders))
				.then(({ data }) =>
					setNeighbors(data.map(c => ({ name: c.name.common, code: c.cca3 })))
				)
		}
	}, [borders])

	return (
		<section className='info__wrapper'>
			<img className='info__image' src={flags.svg} alt={flags.alt} />
			<div>
				<h1 className='info__title'>{name?.common || 'N/A'}</h1>
				<div className='info__list-group'>
					<ul className='info__list'>
						<li className='info__list-item'>
							<b>Native Name:</b> {name?.nativeName?.eng?.common || 'N/A'}
						</li>
						<li className='info__list-item'>
							<b>Population:</b> {population || 'N/A'}
						</li>
						<li className='info__list-item'>
							<b>Region:</b> {region || 'N/A'}
						</li>
						<li className='info__list-item'>
							<b>Sub Region:</b> {subregion || 'N/A'}
						</li>
						<li className='info__list-item'>
							<b>Capital:</b> {capital[0] || 'N/A'}
						</li>
					</ul>
					<ul className='info__list'>
						<li className='info__list-item'>
							<b>Top Level Domain:</b>
							{tld.length > 0 ? (
								<span>{tld.join(', ')}</span>
							) : (
								<span>N/A</span>
							)}
						</li>
						<li className='info__list-item'>
							<b>Currency:</b>
							{Object.keys(currencies).length > 0 ? (
								<span>{Object.values(currencies)[0]?.name || 'N/A'}</span>
							) : (
								<span>N/A</span>
							)}
						</li>
						<li className='info__list-item'>
							<b>Languages:</b>
							{Object.keys(languages).length > 0 ? (
								<span>{Object.values(languages).join(', ')}</span>
							) : (
								<span>N/A</span>
							)}
						</li>
					</ul>
				</div>
				<div className='info__meta'>
					<b>Border Countries:</b>
					{borders && borders.length === 0 ? (
						<span>There are no border countries</span>
					) : (
						<div className='info__tag-group'>
							{neighbors.length > 0 ? (
								neighbors.map(({ name, code }) => (
									<span
										key={code}
										className='info__tag'
										onClick={() => navigate(`/country/${name}`)}
									>
										{name}
									</span>
								))
							) : (
								<span>No neighboring countries</span>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default Info
