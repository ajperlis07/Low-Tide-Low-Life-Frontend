import React from "react";

function RecipeSearch({setRecipeSearchCon}) {
  
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Recipes:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a Recipe Name to search..."
        onChange={(e) => setRecipeSearchCon(e.target.value)}
      />
    </div>
  );
}

export default RecipeSearch;