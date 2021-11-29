import { Component } from 'react'
import './Search.css'

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
			<div className='search'>
				<h2>Search</h2>
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