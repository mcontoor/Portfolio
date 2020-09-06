import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const options = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
];

const Header = () => (
    <header
        style={{
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 1200,
                padding: `0.2rem 1.0875rem`,
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <h1 style={{ margin: 10 }}>MC</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {options.map(option => (
                    <a style={{ margin: 10 }} href={option.path}>
                        <p style={{ margin: 0 }}>{option.name}</p>
                    </a>
                ))}
                <span style={{ margin: 10 }}>
                    <DarkModeToggle />
                </span>
            </div>
        </div>
    </header>
);

export default Header;
