import React, {useState} from "react";
function RecipeCard({story, instruction, id, description, setRecipes, illustration, fishName, calories, carbohydrate, cholesterol, fat, protein, satFat, selenium, serving, sodium}) {

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
        <div>
            <h1>{fishName}</h1>
            <img src={illustration} alt={fishName} />
            <h2> Recipe Name: {description}</h2>
            {isFormInstruction ? (
                <h2>
                    <form onSubmit={handleInstructionUpdate}>
                        <textarea onChange={handleInstructionChange} type="text" value={updatedInstruction} />
                        <button type="submit">Update Instructions</button>
                    </form>
                </h2>
            ) : (<h2 onClick={(e) => setIsFormInstruction(!isFormInstruction)}> Recipe: {updatedInstruction}</h2>
            )}
             {isFormStory ? (
                <h2>
                    <form onSubmit={handleStoryUpdate}>
                        <textarea onChange={handleStoryChange} type="text" value={updatedStory} />
                        <button type="submit">Update Story</button>
                    </form>
                </h2>
            ) : (<h2 onClick={(e) => setIsFormStory(!isFormStory)}> Fish Story: {updatedStory}</h2>
            )}
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
            <button onClick={handleDelete}>Delete Recipe</button>
        </div>
    )
}
export default RecipeCard;