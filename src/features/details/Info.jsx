import React from 'react'
import './info.scss'
import { useNeighbors } from './use-neighbors'

export const Info = props => {
	const {
		name,
		nativeName,
		flag,
		capital,
		population,
		region,
		subregion,
		topLevelDomain,
		currencies = [],
		languages = [],
		borders = [],
		navigate,
	} = props

	const neighbors = useNeighbors(borders)

	return (
		<section className='info'>
			<img className='info__image' src={flag} alt={name} />

			<div>
				<h1 className='info__title'>{name}</h1>
				<div className='info__list-group'>
					<ul className='info__list'>
						<li className='info__list-item'>
							<b>Native Name:</b> {nativeName}
						</li>
						<li className='info__list-item'>
							<b>Population:</b> {population}
						</li>
						<li className='info__list-item'>
							<b>Region:</b> {region}
						</li>
						<li className='info__list-item'>
							<b>Sub Region:</b> {subregion}
						</li>
						<li className='info__list-item'>
							<b>Capital:</b> {capital}
						</li>
					</ul>
					<ul className='info__list'>
						<li className='info__list-item'>
							<b>Top Level Domain:</b>{' '}
							{topLevelDomain.map(d => (
								<span key={d}>{d}</span>
							))}
						</li>
						<li className='info__list-item'>
							<b>Currency:</b>{' '}
							{currencies.map(c => (
								<span key={c.code}>{c.name} </span>
							))}
						</li>
						<li className='info__list-item'>
							<b>Languages:</b>{' '}
							{languages.map(l => (
								<span key={l.name}>{l.name}</span>
							))}
						</li>
					</ul>
				</div>
				<div className='info__meta'>
					<b>Border Countries:</b>
					{!borders.length ? (
						<span>There is no border countries</span>
					) : (
						<div className='info__tag-group'>
							{neighbors.map(countryName => (
								<span
									className='info__tag'
									key={countryName}
									onClick={() => navigate(`/country/${countryName}`)}
								>
									{countryName}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
