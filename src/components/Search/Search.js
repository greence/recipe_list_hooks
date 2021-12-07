import { Component } from 'react'
import './Search.scss'

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchRequest: ''
		}
	}

	onInputChange = e => {
		let inputValue = e.target.value
		this.setState({
			searchRequest: inputValue
		})
		this.props.onSearchInputChange(inputValue)
	}

	render() {
		return (
			<div className='search mb-5'>
				<h2 className='mb-2'>Search</h2>
				<input
					type="text"
					className='form-control'
					placeholder='Искать рецепт'
					value={this.state.searchRequest}
					onChange={this.onInputChange} />
			</div>
		)
	}
}

export default Search