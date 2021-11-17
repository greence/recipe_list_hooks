import './RecipeAddForm.css'

const RecipeAddForm = () => {
	return (
		<div className='recipe-add-form'>
			<h4>Добавить новый рецепт</h4>
			<form>
				<input type="text" className="form-control" placeholder="Введите название рецепта" />
				<textarea name="" id="" className="form-control" placeholder="Введите описание"></textarea>
				<button className="btn btn-primary" type="submit">Добавить</button>
			</form>
		</div>
	)
}

export default RecipeAddForm