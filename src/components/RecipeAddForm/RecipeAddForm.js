import './RecipeAddForm.css'
import { Component } from 'react'

class RecipeAddForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			ingridients: '',
		}
	}

	onInputChanged = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onAdd = e => {
		e.preventDefault()
		this.props.addNewRecipe(this.state.title, this.state.ingridients)
		//clean form
		this.setState({
			title: '',
			ingridients: '',
		})
	}

	render() {
		const { title, ingridients, } = this.state
		// const { addNewRecipe } = this.props

		return (
			<div className='recipe-add-form'>
				<h4>Добавить новый рецепт</h4>
				<form>
					<input
						type="text"
						name="title"
						className="form-control"
						placeholder="Введите название рецепта"
						value={title}
						onChange={this.onInputChanged}
					/>
					<textarea
						name="ingridients"
						className="form-control"
						placeholder="Введите описание"
						value={ingridients}
						onChange={this.onInputChanged}>
					</textarea>
					<button
						className="btn btn-primary"
						type="submit"
						onClick={this.onAdd}>
						Добавить
					</button>
				</form>
			</div>
		)
	}
}

export default RecipeAddForm