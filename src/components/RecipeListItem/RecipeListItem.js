import './RecipeListItem.css'
import { Component } from 'react'
import img1 from '../../assets/1463.jpg'

class RecipeListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			favourite: false
		}
	}

	addToFavourite = () => {
		this.setState(({ favourite }) => ({
			favourite: !favourite
		}))
	}

	render() {
		const { title, ingridients, deleteRecipe } = this.props
		const { favourite } = this.state;

		let classNames = "recipe-list-item"
		if (favourite) {
			classNames += ' favourite'
		}

		return (
			<li className={classNames}>
				<div className="card" style={{ width: '310px' }}>
					<img src={img1} alt="" />
					<div className="card-body">
						<div className="card-description">
							<h5 className="card-title">{title}</h5>
							{/* <p className="card-text">{ingridients.join(', ')}</p> */}
							<p className="card-text">{ingridients}</p>
						</div>

						<div className="card-bottom">
							<button className="btn btn-primary _btn">Подробнее</button>
							<div className="card-bottom-icons">
								<button type="button" className="fas fa-bookmark" title="Добавить в избранные" onClick={this.addToFavourite}></button>
								<button type="button" className="fas fa-trash-alt" title='Удалить'
									onClick={deleteRecipe}></button>
							</div>
						</div>
					</div>
				</div>
			</li>
		)
	}
}

export default RecipeListItem