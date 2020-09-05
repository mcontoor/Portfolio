/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/seo';

import Header from './header';
import '../styles/styles.scss';

const Layout = ({ children }) => {
    return (
        <>
            <SEO title="Meghna Contoor" />
            <Header />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 'calc(100% - 131px)',
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
            </div>
            <footer>
                <div style={{ textAlign: 'center' }}>
                    <div>placeholder for icons</div>© {new Date().getFullYear()}
                </div>
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
