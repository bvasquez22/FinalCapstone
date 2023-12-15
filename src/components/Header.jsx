import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="fab_nav">
                <div className="fab_logo">
                    <h1>FaB Manager</h1>
                </div>
                <h4>Sets</h4>
                <h4>My collection</h4>
            </div>
            <div className="fab_sign_in">
                <h4>Sign in</h4>
            </div>
        </header>
    )
};

export default Header