import './card.scss'

const Card = ({ img, name, info = [], onClick }) => {
	return (
		<article className='card' onClick={onClick}>
			<img className='card__image' src={img} alt={name} />
			<div className='card__body'>
				<h3 className='card__title'>{name}</h3>
				<ul className='card__list'>
					{info.map(el => (
						<li key={el.title} className='card__list-item'>
							<b>{el.title}:</b> {el.description}
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default Card
