import React, {useState} from "react";
function RecipeCard({story, instruction, handleNewFavorite, fishId, id, description, setRecipes, illustration, fishName, calories, carbohydrate, cholesterol, fat, protein, satFat, selenium, serving, sodium}) {

    const [isFormStory, setIsFormStory] = useState(false)
    const [isFormInstruction, setIsFormInstruction] = useState(false)
    const [updatedStory, setUpdatedStory] = useState(story)
    const [updatedInstruction, setUpdatedInstruction] = useState(instruction)

    function handleStoryUpdate(e){
        e.preventDefault();
        fetch(`http://localhost:3000/recipes/${id}`,{
            method: 'PATCH',
            headers: {"Content-Type": "application/json",
            accept: "application/json"},
            body: JSON.stringify({story: updatedStory})

        })
        setIsFormStory(!isFormStory)
        setRecipes(recipes => recipes.map(recipe => {
            if(recipe.id === id){
                return {...recipe, story: updatedStory}
            }
            else  {return (recipe)}
        }))
    }

    function handleFavorite(e) {
        e.preventDefault();
        

        const data = {
            user_id: 1,
            recipe_id: id,
            fish_id: fishId
        }
        fetch('http://localhost:3000/favorites', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(newFavorite => handleNewFavorite(newFavorite))
    }

    function handleInstructionUpdate(e){
        e.preventDefault();
        fetch(`http://localhost:3000/recipes/${id}`,{
            method: 'PATCH',
            headers: {"Content-Type": "application/json",
            accept: "application/json"},
            body: JSON.stringify({instruction: updatedInstruction})

        })
        setIsFormInstruction(!isFormInstruction)
        setRecipes(recipes => recipes.map(recipe => {
            if(recipe.id === id){
                return {...recipe, instruction: updatedInstruction}
            }
            else  {return (recipe)}
        }))
    }    

    function handleStoryChange(e){
        setUpdatedStory(e.target.value)
    }

    function handleInstructionChange(e){
        setUpdatedInstruction(e.target.value)
    }

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
        <div className="card">
            <h1>{fishName}</h1>
            <img src={illustration} alt={fishName} />
            <h2> Recipe Name: </h2> <p>{description}</p>
            <h2> Recipe: </h2> <p>{updatedInstruction}</p>
            <h2> Fish Story: </h2> <p>{updatedStory}</p>
            <ul> <h2>Nutritional Facts</h2>
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
            {isFormInstruction ? (
                <h2>
                    <form onSubmit={handleInstructionUpdate}>
                        <textarea onChange={handleInstructionChange} type="text" value={updatedInstruction} />
                        <button type="submit">Update Recipe</button>
                    </form>
                </h2>
            ) : (<button onClick={(e) => setIsFormInstruction(!isFormInstruction)}> Update Recipe</button>
            )}
             {isFormStory ? (
                <h2>
                    <form onSubmit={handleStoryUpdate}>
                        <textarea onChange={handleStoryChange} type="text" value={updatedStory} />
                        <button type="submit">Update Fish Story</button>
                    </form>
                </h2>
            ) : (<button onClick={(e) => setIsFormStory(!isFormStory)}> Update Fish Story </button>
            )}
            <button onClick={handleDelete}>Delete Recipe</button>
            <button onClick={handleFavorite}>Add Recipe to Favorites</button>
        </div>
    )
}
export default RecipeCard;