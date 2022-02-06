import { useState } from 'react'
import RecipeList from '../RecipeList/RecipeList'
import './Filter.scss'

const Filter = () => {
	const [recipeList, setRecipeList] = useState(false)
	const [recipeType, setRecipeType] = useState('')
	const [activeBtn, setActiveBtn] = useState()

	const showRecipeList = (arg, index) => {
		setRecipeList(true)
		setRecipeType(arg)
		setActiveBtn(index)
	}

	const filterButtons = [
		{ name: 'meat', label: 'Meat' },
		{ name: 'chicken', label: 'Chicken' },
		{ name: 'pork', label: 'Pork' },
		{ name: 'salads', label: 'Salads' },
		{ name: 'drinks', label: 'Drinks' },
		{ name: 'cakes', label: 'Cakes' },
	]

	const buttons = filterButtons.map((button, index) => {
		return (
			<button
				key={button.name}
				type='button'
				style={activeBtn === index ? {
					backgroundImage: 'linear-gradient(45deg, #6ab1d7 0%, #000 50%, #002878 100%)',
					backgroundPosition: '100% 0',
					backgroundSize: ' 200% 200%'
				} : {}}
				// className={`btn ${activeBtn}`}
				onClick={() => showRecipeList(button.name, index)}
			>
				{button.label}
			</button >
		)
	})

	const recipes = recipeList ? <RecipeList recipeType={recipeType} /> : null
	return (
		<div className='filter'>
			<span className='filter-text'>Click the following button to find recipes</span>
			<div className='filter-buttons'>
				{buttons}
			</div>
			{recipes}
		</div>
	)
}

export default Filter