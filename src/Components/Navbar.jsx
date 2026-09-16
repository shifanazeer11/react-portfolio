import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">

                <div className="logo">
                    <span className="logo-icon">SN</span>
                    <span>Shifa Nazeer</span>
                </div>

                {/* Navigation Links */}
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>                   <li>
                        <Link to="/Project">Projects</Link>
                    </li>                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>

                </ul>


                <Link to="/contact" className="get-started-btn">
                    Get Started <span>→</span>
                </Link>

            </div>
        </nav >
    );
}

export default Navbar;