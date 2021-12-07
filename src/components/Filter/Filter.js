import './Filter.scss'

const Filter = props => {
	const filterButtons = [
		{ name: 'all', label: 'Все' },
		{ name: 'new', label: 'Новые' },
		{ name: 'favourite', label: 'Избранные' },
	]

	const buttons = filterButtons.map(button => {
		const active = props.filter === button.name
		const clazz = active ? 'btn-primary' : 'btn-dark'
		return (
			<button
				key={button.name} type='button' className={`btn ${clazz}`} onClick={() => props.onFilterChange(button.name)}
			>{button.label}</button>
		)
	})


	return (
		<div className='filter mb-2'>
			{buttons}
			<p>Реализовать фильтр по предлодженным тегам, заменить кнопки на линки с тегами под инпутом</p>
		</div>
	)
}

export default Filter