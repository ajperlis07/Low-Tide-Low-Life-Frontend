import React from "react";
import FishCard from "./FishCard"
function FishList({fish}) {
 
    const fishCards = fish.map((fish) => {
        return (<FishCard 
        key={fish.id}
        id={fish.id}
        name={fish.species_name}
        illustration={fish.illustration}
        />)
    })
    return (
        <div className="cards">
            {fishCards}
        </div>
    )
}
export default FishList;