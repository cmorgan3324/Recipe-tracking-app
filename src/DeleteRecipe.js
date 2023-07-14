import React from "react";

function DeleteRecipe({ deleteRecipe }) {
  return (
    <button name="delete" onClick={deleteRecipe}>
      Delete
    </button>
  );
}

export default DeleteRecipe;
