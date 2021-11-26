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
		let value = e.target.value
		this.setState({
			searchRequest: value
		})
		this.props.onSearchInput(value)
	}

	render() {
		return (
			<div className='search'>
				<h2>Search</h2>
				<input type="text" className='form-control' placeholder='Искать рецепт' onChange={this.onInputChange} />
			</div>
		)
	}
}

export default Search