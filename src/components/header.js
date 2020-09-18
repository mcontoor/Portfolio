import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Home, Archive, Clipboard, User } from 'react-feather';

const options = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Resume', path: '/resume', icon: <Clipboard size={18} /> },
    // { name: 'Portfolio', path: '/', icon: <Archive size={18} /> },
    { name: 'Contact', path: '/contact', icon: <User size={18} /> },
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
                                {option.icon}{' '}
                                <p style={{ margin: 0, paddingInlineStart: 5, paddingTop: 10 }}>
                                    {option.name}
                                </p>
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
