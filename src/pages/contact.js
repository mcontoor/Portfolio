import React from 'react';
import Layout from '../components/layout';

const Contact = () => {
    return (
        <Layout>
            <div className="container contact">
                <h1>Have a question?</h1>
                <p>
                    You can write to me on{' '}
                    <a href="mailto:mcontoor@gmail.com">
                        <b>mcontoor@gmail.com</b>
                        </a>{' '}
                    or <br />
                    Drop in a message below! <br />
                </p>
                <br />
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>
                            Your Name:
                            <br /> <input type="text" name="name" />
                        </label>
                    </p>

                    <p>
                        <label>
                            Your Email:
                            <br /> <input type="email" name="email" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message:
                            <br /> <textarea name="message"></textarea>
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </Layout>
    );
};

export default Contact;
