import React, {useState} from "react";
function RecipeCard({story, instruction, id, setRecipes}) {

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
            {isFormInstruction ? (
                <h2>
                    <form onSubmit={handleInstructionUpdate}>
                        <textarea onChange={handleInstructionChange} type="text" value={updatedInstruction} />
                        <button type="submit">Update Instructions</button>
                    </form>
                </h2>
            ) : (<p onClick={(e) => setIsFormInstruction(!isFormInstruction)}> {updatedInstruction}</p>
            )}
             {isFormStory ? (
                <h2>
                    <form onSubmit={handleStoryUpdate}>
                        <textarea onChange={handleStoryChange} type="text" value={updatedStory} />
                        <button type="submit">Update Story</button>
                    </form>
                </h2>
            ) : (<p onClick={(e) => setIsFormStory(!isFormStory)}> {updatedStory}</p>
            )}
            <button onClick={handleDelete}>Delete Recipe</button>
        </div>
    )
}
export default RecipeCard;