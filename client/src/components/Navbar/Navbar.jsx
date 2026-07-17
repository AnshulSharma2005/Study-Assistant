import "./Navbar.css";

import { FaBrain } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Navbar(){

    return(

        <nav className="navbar">

            <div className="logo">

                <FaBrain className="logo-icon"/>

                <h2>AI Study Assistant</h2>

            </div>

            <button className="theme-btn">

                <FaMoon/>

                <span>Dark</span>

            </button>

        </nav>

    )

}

export default Navbar;