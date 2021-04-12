// import React, { useEffect, useState } from "react";
// import FishList from "./FishList"
// import RecipeForm from "./RecipeForm";


// function FishContainer() {
//     const [fish, setFish] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3000/fish')
//         .then(res => res.json())
//         .then(data => setFish(data))
//     },[])

//     return (
//         <div> 
//             <FishList fish={fish}/>
//             <RecipeForm fish={fish}/>
//         </div>
//     )
// }

// export default FishContainer;