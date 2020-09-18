import React from 'react';
import Layout from '../components/layout';
import { resume } from '../resume/resume';

const Resume = () => {
    return (
        <Layout>
            <div className="container">
                <section id="resume">
                    <span>
                        <h1>Resume</h1>
                        <a
                            className="btn"
                            href={
                                'https://drive.google.com/file/d/1bG_4CMHl44FqnKILDLB3ch04EU-5tQ6o/view?usp=sharing'
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Resume link"
                        >
                            Download PDF
                        </a>
                    </span>
                    <ul className="list">
                        {resume.map(x => (
                            <>
                                <li className="year">{x.year}</li>
                                {x.data.map(y => (
                                    <div className="summary">
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
