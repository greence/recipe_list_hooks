import { Component } from 'react'
import './RecipeAddForm.scss'

class RecipeAddForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			ingridients: '',
			isHidden: true
		}
	}

	onInputChanged = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onAdd = e => {
		e.preventDefault()
		if (this.state.title.length > 5 && this.state.ingridients.length > 15) {
			this.props.addNewRecipe(this.state.title, this.state.ingridients)
			//clean form
			this.setState({
				title: '',
				ingridients: '',
			})
		} else {
			this.setState({
				// ...this.state,
				isHidden: false
			})
			console.log('error');
		}


	}

	render() {
		const { title, ingridients, } = this.state

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
					<span className='warning hidden'>Название не может быть менее 5 символов</span>
					<textarea
						name="ingridients"
						className="form-control"
						placeholder="Введите описание"
						value={ingridients}
						onChange={this.onInputChanged}>
					</textarea>
					<span
						className={`warning ${this.props.isHidden ? '' : 'hidden'}`}
					// isHidden={this.state.isHidden}
					// className='warning hidden'
					>
						Это поле не может содержать менее 10 символов</span>
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