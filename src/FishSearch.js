import React from "react";

function FishSearch({setFishSearchCon}) {
  
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Fish:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setFishSearchCon(e.target.value)}
      />
    </div>
  );
}

export default FishSearch;
