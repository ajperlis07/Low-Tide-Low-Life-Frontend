import React from "react";

function FishSearch({setFishSearchCon}) {
  
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Fish:</label>
      <input
        type="text"
        id="search"
        className="search-input"
        placeholder="Type a Name to search..."
        onChange={(e) => setFishSearchCon(e.target.value)}
      />
    </div>
  );
}

export default FishSearch;
