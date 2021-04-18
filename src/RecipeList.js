import React from "react";
import RecipeCard from "./RecipeCard";



function RecipeList({recipes, setRecipes}) {
   
    const recipeCards = recipes.map((recipe) => {
        return (<RecipeCard 
        key={recipe.id}
        id={recipe.id}
        story={recipe.story}
        instruction={recipe.instruction}
        description={recipe.description}
        setRecipes={setRecipes}
        illustration={recipe.fish.illustration}
        fishName={recipe.fish.species_name}
        calories={recipe.fish.calories}
        carbohydrate={recipe.fish.carbohydrate}
        cholesterol={recipe.fish.cholesterol}
        fat={recipe.fish.fat_total}
        protein={recipe.fish.protein}
        satFat={recipe.fish.saturated_fat}
        selenium={recipe.fish.selenium}
        serving={recipe.fish.serving_weight}
        sodium={recipe.fish.sodium}
        />)
    })
    return (
        <div>{recipeCards}</div>
    )
}
export default RecipeList;