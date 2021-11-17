import './Filter.css'

const Filter = () => {
	return (
		<div className='filter'>
			<button type='button' className='btn btn-primary'>Все</button>
			<button type='button' className='btn btn-dark'>Новые</button>
			<button type='button' className='btn btn-dark'>Избранные</button>
		</div>
	)
}

export default Filter