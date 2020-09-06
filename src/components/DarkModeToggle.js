import React from 'react';
import useDarkMode from 'use-dark-mode';
import Day from '../assets/day.svg';
import Night from '../assets/night.svg';

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);
    return (
        <div className="dark-mode-toggle">
            {darkMode.value ? (
                <button type="button" onClick={darkMode.toggle}>
                    <Night className="toggle-control" />
                </button>
            ) : (
                <button type="button" onClick={darkMode.toggle}>
                    <Day className="toggle-control" />
                </button>
            )}
        </div>
    );
};

export default DarkModeToggle;
