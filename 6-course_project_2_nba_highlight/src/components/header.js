import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="flexbox-container">
                <Link to="/" className="logo">
                    <span></span>
                </Link>
                <nav>
                    <Link to="/teams">Teams</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;