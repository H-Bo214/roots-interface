import React from 'react';
// import AddRecipeFromBook from '../AddRecipeFromBook/AddRecipeFromBook';
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm';
import './AddRecipe.css';

const AddRecipe = ({ user, bookId }) => {
	return (
		<div className="AddRecipe">
			{/* Will need to render this component once we implement this feature. See the AddRecipeFromBook component file */}
			{/* <AddRecipeFromBook user={user} /> */}
			<NewRecipeForm user={user} bookId={bookId} />
		</div>
	);
};

export default AddRecipe;
