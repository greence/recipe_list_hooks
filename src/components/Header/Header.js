import './Header.css'

const Header = props => {
	const favourite = props.data.filter(recipe => recipe.favourite).length
	return (
		<div className='header'>
			<h1>Каталог рецептов</h1>
			<div>Всего рецептов: <b>{props.data.length}</b></div>
			<div>Избранные: <b>{favourite}</b></div>
		</div>
	)
}

export default Header