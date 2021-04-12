import React from "react";
import RecipeCard from "./RecipeCard";



function RecipeList({recipes, setRecipes}) {
   
    const recipeCards = recipes.map((recipe) => {
        return (<RecipeCard 
        key={recipe.id}
        id={recipe.id}
        story={recipe.story}
        instruction={recipe.instruction}
        setRecipes={setRecipes}
        />)
    })
    return (
        <div>{recipeCards}</div>
    )
}
export default RecipeList;