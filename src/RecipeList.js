import React from "react";
import DeleteRecipe from "./DeleteRecipe";

function RecipeList({ recipes, deleteRecipe }) {
  const formRows = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
        <td id="name">{name}</td>
        <td id="cuisine">{cuisine}</td>
        <td id="photo">
          <img src={photo} alt="food" />
        </td>
        <td className="content_td" id="ingredients">
          <p>{ingredients}</p>
        </td>
        <td className="content_td" id="preparation">
          <p>{preparation}</p>
        </td>
        <td>
          <DeleteRecipe deleteRecipe={() => deleteRecipe(index)} />
        </td>
      </tr>
    )
  );

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th id="name">Name</th>
            <th id="cuisine">Cuisine</th>
            <th id="photo">Photo</th>
            <th id="ingredients">Ingredients</th>
            <th id="preparation">Preparation</th>
            <th id="action">Actions</th>
          </tr>
        </thead>
        <tbody>{formRows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
