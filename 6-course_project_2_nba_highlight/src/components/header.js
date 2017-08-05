import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="flexbox-container">
                <div className="logo">
                    <span></span>
                </div>
                <nav>
                    <Link to="/teams">Teams</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;