import React from 'react';

function FavoriteCard({ id, setFavorites, story, instruction, description, setRecipes, illustration, fishName, calories, carbohydrate, cholesterol, fat, protein, satFat, selenium, serving, sodium, handleNewFavorite, fishId }){

    function handleFavoriteDelete(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/favorites/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        setFavorites(favorites => favorites.filter(favorite => 
            favorite.id !== id
        ))
    }

    return <div>
            <h1>{fishName}</h1>
            <img src={illustration} alt={fishName} />
            <h2> Recipe Name: {description}</h2>
            <h3> Recipe: {instruction}</h3>
            <h3>Fish Story: {story}</h3>
            <ul> <h2>Nutrional Facts</h2>
                <li>Calories: {calories}</li>
                <li>Carbs: {carbohydrate}</li>
                <li>Cholesterol: {cholesterol}</li>
                <li>Fat: {fat}</li>
                <li>Protein: {protein}</li>
                <li>Saturated Fat: {satFat}</li>
                <li>Selenium: {selenium}</li>
                <li>Serving: {serving}</li>
                <li>Sodium: {sodium}</li>
            </ul>
            <button onClick={handleFavoriteDelete}>Delete Favorite</button>
     </div>
}

export default FavoriteCard;