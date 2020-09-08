/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import SocialIcons from './SocialIcons';
import Header from './header';
import '../styles/styles.scss';

const Layout = ({ children }) => {
    return (
        <>
            <SEO title="Meghna Contoor" />
            <Header />
            <main className="main">{children}</main>
            <footer>
                <div className="footer">
                    <div>
                        <SocialIcons />
                    </div>
                    © {new Date().getFullYear()} - All rights reserved. Made
                    with <span className="heart">❤</span> by{' '}
                    <b>Meghna Contoor</b>
                </div>
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
