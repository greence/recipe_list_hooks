import './Filter.css'

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
		<div className='filter'>
			{buttons}
			{/* <button type='button' className="btn btn-primary">Все</button>
			<button type='button' className="btn btn-dark">Новые</button>
			<button type='button' className="btn btn-dark">Избранные</button> */}
		</div>
	)
}

export default Filter