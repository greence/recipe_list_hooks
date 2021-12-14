import './RecipeListItem.scss'

const RecipeListItem = props => {
	const { name, thumbnail, time, homepage } = props

	return (
		<li className='recipe-list-item'>
			<div className="card" style={{ width: '310px' }}>
				<img src={thumbnail} alt="" />
				<div className="card-body">
					<div className="card-description">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">Cooking time {time} minutes</p>
					</div>
					<div className="card-bottom">
						<a href={homepage} className="btn btn-primary _btn">See more</a>
					</div>
				</div>
			</div>
		</li>
	)

}

export default RecipeListItem