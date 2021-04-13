import React from "react";
import FishCard from "./FishCard"
function FishList({fish, fishSearchCon}) {

    const filterFish = fish.filter((fish) => {return fish.species_name.toLowerCase().includes(fishSearchCon)})
 
    const fishCards = filterFish.map((fish) => {
        return (<FishCard 
        key={fish.id}
        id={fish.id}
        name={fish.species_name}
        illustration={fish.illustration}
        scientificName={fish.scientific_name}
        biology={fish.biology}
        population={fish.population}
        physicalDescription={fish.physical_description}

        />)
    })
    return (
        <div className="cards">
            {fishCards}
        </div>
    )
}
export default FishList;