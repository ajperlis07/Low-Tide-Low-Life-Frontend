import React from "react";
function FishCard({name, illustration, id}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={illustration} alt={name} />
        </div>
    )
}
export default FishCard;