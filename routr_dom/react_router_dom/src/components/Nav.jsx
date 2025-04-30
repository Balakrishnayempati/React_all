import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";
import Data from "./Products/Pro_Data";
function Nav()
{
    return(
        <div id="nav">
            <div id="left_nav">
                <h2>FINEXO</h2>
            </div>

            <div id="right_nav">
                <Link id="li" to="/home"><span>HOME</span></Link>
                <Link id="li" to="/about"><span>ABOUT</span></Link>
                <Link id="li" to="/contact"><span>CONTACT</span></Link>
                <Link id="li" to="/Products"><span>PRODUCTS</span></Link>
            </div>
        </div>
    )
}
export default Nav;