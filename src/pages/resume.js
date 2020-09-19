import React, { useState } from 'react';
import Layout from '../components/layout';
import { resume } from '../resume/resume';
import { Download } from 'react-feather';

const Resume = () => {
    const [showResume, setShowResume] = useState(true);
    return (
        <Layout>
            <div className="container resume">
                <section id="about">
                    <div>
                        <h1 className="text-center">About Me</h1>
                        <p>
                            Hi! I'm a full stack developer based in India. I
                            mainly work with Javascript/Node.js and other JS
                            frameworks. I'm passionate about writing code that
                            solves problems and contributing to open source. I
                            completed my masters degree in Earth Sciences and
                            switched from a career as a geologist to a coder. I
                            also have prior freelance experience in the travel
                            and social sectors. My hobbies include
                            mountaineering, sailing, and Ultimate Frisbee!
                        </p>
                    </div>
                </section>
                <span className="btn-container">
                    {/* <button className="btn" onClick={() => setShowResume(true)}>
                        Resume
                    </button> */}
                    {/* <button
                        className="btn"
                        onClick={() => setShowResume(false)}
                    >
                        Skills
                    </button> */}
                    <a
                        className="btn download"
                        href={
                            'https://drive.google.com/file/d/1vurokJadneFSPUhOsCtOgJat1ebwlLLb/view?usp=sharing'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Resume link"
                    >
                        Download PDF <Download size={18} />
                    </a>
                </span>
                {showResume ? (
                    <section id="resume">
                        <ul className="list">
                            {resume.map(x => (
                                <>
                                    <p className="year">{x.year}</p>
                                    {x.data.map(y => (
                                        <div className="summary">
                                            <span>
                                                <h3>{y.title}</h3>
                                                <h1 className="heading">
                                                    {y.name}{' '}
                                                    <p>
                                                        {y.location}, {y.date}
                                                    </p>
                                                </h1>
                                                {y.summary.map(z => (
                                                    <div className="content">
                                                        <p>{z.project}</p>
                                                        <ul>
                                                            {z.details.map(
                                                                a => (
                                                                    <li>
                                                                        <p>
                                                                            {a}
                                                                        </p>
                                                                    </li>
                                                                )
                                                            )}
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
                ) : (
                    <section id="skills"></section>
                )}
            </div>
        </Layout>
    );
};

export default Resume;
