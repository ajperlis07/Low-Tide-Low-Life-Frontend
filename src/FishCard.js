import React from "react";
function FishCard({name, illustration, id, scientificName, biology, population, physicalDescription}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <h3>Scientific Name: {scientificName}</h3>
            <img src={illustration} alt={name} />
            <h4>Physical Description: <p>{physicalDescription}</p></h4>
            <h4>Biology: <p>{biology}</p></h4>
            <h4>Population: <p>{population}</p></h4>
        </div>
    )
}
export default FishCard;