import React from "react";
import './App.css';

const Navbar = () => {
    return ( 
        <nav className="navbar"> 
        <a href="javascript:void(0)" class="closebtn" onclick="closeSideNav()">&times;</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
        </nav>
     );
}
 
export default Navbar;