import React from 'react';

import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Image from '../components/image';
import { Briefcase, Compass } from 'react-feather';

const IndexPage = ({ data }) => {
    const {
        company,
        location,
        followers,
        following,
        repositories,
        status,
    } = data.githubData.data.viewer;

    console.log(location, data);
    return (
        <Layout>
            <div className="container home">
                <div className="profile-img-container">
                    <Image />
                </div>
                <div>
                    <h1 className="home-title">Meghna Contoor</h1>
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

export const gitHubQuery = graphql`
    {
        githubData {
            data {
                viewer {
                    company
                    status {
                        id
                        emoji
                        message
                    }
                    followers {
                        totalCount
                    }
                    following {
                        totalCount
                    }
                    repositories {
                        totalCount
                    }
                    location
                }
            }
        }
    }
`;
