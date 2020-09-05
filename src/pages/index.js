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
            <div className="home">
                <div className="profile-img-container">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>
                <div>
                    <h1>Meghna Contoor</h1>
                    <p>Full Stack Developer</p>
                    <p>Now go build something great.</p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
