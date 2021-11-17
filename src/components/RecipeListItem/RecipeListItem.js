import './RecipeListItem.css'
import img1 from '../../assets/1463.jpg'

const RecipeListItem = ({ title, ingridients }) => {

	return (
		<li className="recipe-list-item">
			<div className="card" style={{ width: '310px' }}>
				<img src={img1} alt="" />
				<div className="card-body">
					<div className="card-description">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{ingridients.join(', ')}</p>
					</div>

					<div className="card-bottom">
						<button className="btn btn-primary _btn">Подробнее</button>
						<div className="card-bottom-icons">
							<i className="fas fa-bookmark" title="Добавить в избранные"></i>
							<i className="fas fa-trash-alt" title='Удалить'></i>
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}

export default RecipeListItem