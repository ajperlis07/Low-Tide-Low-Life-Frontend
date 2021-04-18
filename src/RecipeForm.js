import React, {useState, useEffect} from "react";

function RecipeForm({fish, recipes, handleNewRecipe}) {
   const [instruction, setInstruction] = useState("")
   const [story, setStory] = useState("")
   const [fishId, setFishId]= useState()
   const [description, setDescription] = useState()

   const dropDown = fish.map((fish) => {
       return (<option key={fish.id} value={fish.id}>{fish.species_name}</option>)
   })

   function handleSubmit(e){
       e.preventDefault();
       const data = {
           user_id: 1,
           story: story,
           instruction: instruction,
           fish_id: fishId,
           description: description
       }
       fetch('http://localhost:3000/recipes', {
           method: 'POST',
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then((newRecipe) => {
           handleNewRecipe(newRecipe)
           setStory("")
           setInstruction("")
       })
    }

    function handleFishOnChange(e){
        setFishId(e.target.value)
    }

    function handleStoryOnChange(e){
        setStory(e.target.value)
    }

    function handleDescriptionOnChange(e){
        setDescription(e.target.value)
    }

    function handleInstructionOnChange(e){
        setInstruction(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <select type="text" name="Fish" onChange={handleFishOnChange} value={fishId}>
                {dropDown}
            </select>
            <input type="text" onChange={handleDescriptionOnChange} value={description} placeholder="Recipe Name Here"/>
            <textarea type="text" onChange={handleStoryOnChange} value={story} placeholder="Fish Story Here" />
            <textarea type="text" onChange={handleInstructionOnChange} value={instruction} placeholder="Type Recipe Here" />
            <button type="submit">Create Recipe!</button>

        </form>
    )
}
export default RecipeForm;