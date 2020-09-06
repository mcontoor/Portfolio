import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const options = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
];

const Header = () => {
    const [showMenu, togglenavmenuState] = useState(false);
    return (
        <header
            style={{
                marginBottom: `1.45rem`,
            }}
        >
            <div className="header-items">
                <button
                    className={`hamburger-menu ${showMenu ? 'open' : ''}`}
                    onClick={() => togglenavmenuState(!showMenu)}
                >
                    <div></div>
                </button>

                <h1 className="title">MC</h1>
                <div className="nav">
                    <div className={`menu ${showMenu ? 'menu-open' : ''}`}>
                        {options.map(option => (
                            <a className="nav-options" href={option.path}>
                                <p style={{ margin: 0 }}>{option.name}</p>
                            </a>
                        ))}
                    </div>
                    <span className="toggle">
                        <DarkModeToggle />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
