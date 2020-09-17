import React from 'react';

import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "profile_img.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <div className="container home">
                <div className="profile-img-container">
                    <Img
                        fluid={data.placeholderImage.childImageSharp.fluid}
                    />
                </div>
                <div>
                    <h1>Meghna Contoor</h1>
                    <p className="home-title">FULL STACK DEVELOPER</p>
                    <p className="home-info">
                        Hi, I'm a full stack developer based in India. I mainly
                        work with Javascript/Node.js and other JS frameworks.
                        I'm passionate about writing code that solves problems
                        and contributing to open source.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
