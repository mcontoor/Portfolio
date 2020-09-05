import React from 'react';

import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "gatsby-astronaut.png" }
            ) {
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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        marginBottom: `1.45rem`,
                        height: '15.625rem',
                        width: '15.625rem',
                        border: '1px solid #000  ',
                        borderRadius: '15.625rem',
                        overflow: `hidden`,
                    }}
                >
                    <Img
                        style={{
                            // maxHeight: '15.625rem',
                            // maxWidth: '15.625rem',
                            // height: 'auto',
                            // width: 'auto',
                            margin:0
                        }}
                        fluid={data.placeholderImage.childImageSharp.fluid}
                    />
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
