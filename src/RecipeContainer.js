// import React, {useState, useEffect} from "react";
// import RecipeList from "./RecipeList"

// function RecipeContainer() {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3000/recipes')
//         .then(res => res.json())
//         .then(data => setRecipes(data))
//     },[])

//     return (
//         <div>
//             <RecipeList recipes={recipes}/>
//         </div>
//     )
 
// }
// export default RecipeContainer;