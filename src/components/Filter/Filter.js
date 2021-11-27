import './Filter.css'

const Filter = props => {
	const filterButtons = [
		{ name: 'all', label: 'Все' },
		{ name: 'new', label: 'Новые' },
		{ name: 'favourite', label: 'Избранные' },
	]

	const buttons = filterButtons.map(({ name, label }) => {
		const active = props.filter === name
		const clazz = active ? 'btn-primary' : 'btn-dark'
		return (
			<button key={name} type='button' className={`btn ${clazz}`} onClick={() => props.onFilterSelect(name)}>{label} </button>
		)
	}
	)

	return (
		<div className='filter'>
			{buttons}
		</div>
	)
}

export default Filter