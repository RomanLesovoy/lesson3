import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    console.log(location)
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/message">Message</Link>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
