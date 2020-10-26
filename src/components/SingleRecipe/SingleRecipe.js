import React from 'react';
import './SingleRecipe.css';

const SingleRecipe = () => {
  // get the recipe from the server by id

  //map over ingredients
  const recipeIngredients = (
    <ul>
      <li>1 vial blood</li>
      <li>1 vial blood</li>
      <li>1 vial blood</li>
      <li>1 vial blood</li>
      <li>1 vial blood</li>
      <li>1 vial blood</li>
    </ul>
  );
  return (
    <div>
      <h1>Recipe Name</h1>
      <h2>Recipe Author</h2>
      <p>
        description Labore et dolore pariatur culpa et nostrud esse enim occaecat eu veniam consequat. Duis consectetur et reprehenderit veniam voluptate. Do mollit eu pariatur eiusmod culpa commodo exercitation exercitation ut magna irure. Pariatur adipisicing magna occaecat ullamco excepteur ullamco esse commodo eiusmod. Do Lorem non nostrud aute enim proident nisi veniam ullamco occaecat nulla
        magna veniam proident. Excepteur et adipisicing ea ea veniam laborum cupidatat ullamco nisi tempor qui officia sit ea. Eu qui et reprehenderit mollit ad do cillum.
      </p>
      {recipeIngredients}
      <p>instructions Lorem nulla adipisicing laboris sunt qui occaecat eiusmod et cillum ullamco aliquip exercitation enim enim. Pariatur qui officia dolor irure exercitation velit non pariatur et consequat sit Lorem. Incididunt aliqua irure et nisi veniam dolor deserunt ad ex officia nisi duis fugiat nostrud. Nisi ea adipisicing consectetur mollit ut.</p>
    </div>
  );
};

export default SingleRecipe;
