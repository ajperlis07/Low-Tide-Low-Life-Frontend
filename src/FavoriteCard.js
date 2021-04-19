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

    return <div className="card">
            <h1>{fishName}</h1>
            <img src={illustration} alt={fishName} />
            <h2> Recipe Name: {description}</h2>
            <h3> Recipe: {instruction}</h3>
            <h3>Fish Story: {story}</h3>
            <ul> <h2>Nutrional Facts</h2>
                <li className="ul-bullets">Calories: {calories}</li>
                <li className="ul-bullets">Carbs: {carbohydrate}</li>
                <li className="ul-bullets">Cholesterol: {cholesterol}</li>
                <li className="ul-bullets">Fat: {fat}</li>
                <li className="ul-bullets">Protein: {protein}</li>
                <li className="ul-bullets">Saturated Fat: {satFat}</li>
                <li className="ul-bullets">Selenium: {selenium}</li>
                <li className="ul-bullets">Serving: {serving}</li>
                <li className="ul-bullets">Sodium: {sodium}</li>
            </ul>
            <button onClick={handleFavoriteDelete}>Delete Favorite</button>
     </div>
}

export default FavoriteCard;