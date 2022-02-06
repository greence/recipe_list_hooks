import './RecipeListItem.scss'

const RecipeListItem = props => {
	const { name, thumbnail, time, homepage } = props

	return (
		<li className='recipe-list-item'>
			<div className="card">
				<div className="card-body">
					<img src={thumbnail} alt={name} />
					<div className="card-description">
						<span className="card-title">{name}</span>
						<span className="card-text">Cooking time {time} minutes</span>
						<a href={homepage}><button>See more</button></a>
					</div>
				</div>
			</div>
		</li>
	)
}

export default RecipeListItem