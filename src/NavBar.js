import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <br></br>
            <NavLink to="/fish">All Fish</NavLink>
            <br></br>
            <NavLink to="/recipes"> All Recipes</NavLink>
        </div>
    )
}

export default NavBar;