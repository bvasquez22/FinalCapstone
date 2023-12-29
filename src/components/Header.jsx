import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import SetDropdown from "./SetDropdown";

import './Header.css';

const Header = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [DropdownValue, setDropdownValue] = useState('');

    const handleMouseEnter = (event) => {
        setDropdownVisible(true);
        setDropdownValue(event.target.value)
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
        setDropdownValue('')
    };

    return (
        <header>
            <nav className="fab_nav">
                <div className="fab_logo">
                    <Link to='' className="nav_link">
                        <h1>FaB Manager</h1>
                    </Link>
                </div>
                <Link
                    to={`/${DropdownValue}`}
                    className="nav_link"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h4>Sets</h4>
                    {isDropdownVisible && <SetDropdown />}
                </Link>
                <Link to='my-collection' className="nav_link">
                {/* <Link to={`/my-collection/${user.id}`}> */}
                    <h4>My collection</h4>
                </Link>
            </nav>
            <nav className="fab_sign_in">
                <Link to='/sign-in' className="nav_link">
                    <h4>Sign in</h4>
                </Link>
            </nav>
        </header>
    )
};

export default Header