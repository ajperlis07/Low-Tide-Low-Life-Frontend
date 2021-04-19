import React from 'react';
import FavoriteCard from "./FavoriteCard";

function FavoriteRecipe({ favorites, setFavorites, handleNewFavorite, recipe, setRecipes }) {
    const favoriteCards = favorites.map((favorite) => {
        return (
            <FavoriteCard 
            setFavorites={setFavorites}
            key={favorite.id}
            id={favorite.id}
            story={favorite.recipe.story}
        instruction={favorite.recipe.instruction}
        description={favorite.recipe.description}
        setRecipes={setRecipes}
        illustration={favorite.fish.illustration}
        fishName={favorite.fish.species_name}
        calories={favorite.fish.calories}
        carbohydrate={favorite.fish.carbohydrate}
        cholesterol={favorite.fish.cholesterol}
        fat={favorite.fish.fat_total}
        protein={favorite.fish.protein}
        satFat={favorite.fish.saturated_fat}
        selenium={favorite.fish.selenium}
        serving={favorite.fish.serving_weight}
        sodium={favorite.fish.sodium}
        handleNewFavorite={handleNewFavorite}
        fishId={favorite.fish.id}

            
            />
        )
    })
    return (
        <div >
            <h2>Favorite Recipes</h2>
            <div>{favoriteCards}</div>
        </div>
    )
}

export default FavoriteRecipe;