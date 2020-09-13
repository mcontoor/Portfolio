import React from 'react';
import Layout from '../components/layout';
import { resume } from '../resume/resume';

const Resume = () => {
    return (
        <Layout>
            <div className="container">
                <section id="resume">
                    <h1>Resume</h1>
                    <button>Download CV</button>
                    <ul>
                        {resume.map(x => (
                            <>
                                <li>{x.year}</li>
                                {x.data.map(y => (
                                    <div style={{ background: 'yellow' }}>
                                        <span>
                                            <h1>{y.name}</h1>
                                            <h2>{y.location}</h2>
                                            <h3>{y.title}</h3>
                                            <h4>{y.date}</h4>
                                            {y.summary.map(z => (
                                                <div>
                                                    <h5>{z.project}</h5>
                                                    <ul>
                                                        {z.details.map(a => (
                                                            <li>{a}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </span>
                                    </div>
                                ))}
                            </>
                        ))}
                    </ul>
                </section>
            </div>
        </Layout>
    );
};

export default Resume;
