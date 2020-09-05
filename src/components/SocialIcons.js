import React from 'react';
import {
    Twitter,
    Linkedin,
    GitHub,
    Instagram,
    Facebook,
} from 'react-feather';

const SocialIcons = () => {
    return (
        <div className="social-links">
            <a
                href="http://twitter.com/MeghnaContoor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile link"
            >
                <Twitter />
            </a>
            <a
                href="http://github.com/mcontoor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile link"
            >
                <GitHub />
            </a>
            <a
                href="http://www.linkedin.com/in/meghna-contoor-a6523b80/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile link"
            >
                <Linkedin />
            </a>
            <a
                href=" http://www.facebook.com/meghna.contoor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile link"
            >
                <Facebook />
            </a>
            <a
                href="http://www.instagram.com/meghnacontoor/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile link"
            >
                <Instagram />
            </a>
        </div>
    );
};

export default SocialIcons;
