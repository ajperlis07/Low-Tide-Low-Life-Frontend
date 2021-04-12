import React from "react";
function RecipeCard({story, instruction, id, setRecipes}) {

    function handleDelete(e){
        e.preventDefault();
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: 'DELETE', 
            headers: {
                "Content-Type": "application/json"
            }
        })
        setRecipes(recipes => recipes.filter(recipe =>
            recipe.id !== id))
    }

    return (
        <div>
            <h2>{instruction}</h2>
            <p>{story}</p>
            <button onClick={handleDelete}>Delete Recipe</button>
        </div>
    )
}
export default RecipeCard;