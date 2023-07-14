import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  const centerInput = {
    textAlign: "center",
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody></tbody>
        <tfoot>
          <tr>
            <td id="name" style={centerInput}>
              <label htmlFor="name">
                <input
                  style={{ width: "85px" }}
                  id="inputname"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td id="cuisine" style={centerInput}>
              <label htmlFor="cuisine">
                <input
                  style={{ width: "85px" }}
                  id="inputcuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td id="photo" style={centerInput}>
              <label htmlFor="photo">
                <input
                  style={{ width: "85px" }}
                  id="inputphoto"
                  type="url"
                  name="photo"
                  placeholder="URL"
                  alt=""
                  onChange={handleChange}
                  value={formData.url}
                />
              </label>
            </td>
            <td id="ingredients">
              <textarea
                id="inputingredients"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              ></textarea>
            </td>
            <td id="prepartion">
              <textarea
                id="inputpreparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
              ></textarea>
            </td>
            <td id="action">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export default RecipeCreate;
