import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <div cont>
            <ul >
            <NavLink to='/'>Home</NavLink><br></br>
            <NavLink to="/Persons">Person</NavLink>
            </ul>
        </div>
    )
}

export default Navbar;