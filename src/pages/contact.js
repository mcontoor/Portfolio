import React from 'react';
import Layout from '../components/layout';
import Success from '../assets/success.svg';

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
}

const Contact = () => {
    const [state, setState] = React.useState({});
    const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => setIsFormSubmitted(true))
            .catch(error => alert(error));
    };
    return (
        <Layout>
            <div className="container contact">
                {isFormSubmitted ? (
                    <>
                        <Success />
                        <h3 className="contact-success">
                            Thank you for reaching out to me! Expect a reply in
                            the next 24 hours!
                        </h3>
                    </>
                ) : (
                    <>
                        <h1>Contact</h1>
                        <p className="contact-text">
                            Feel free to reach me for any questions or
                            opportunities you'd like to discuss. You can write
                            to me on{' '}
                            <a href="mailto:mcontoor@gmail.com">
                                <b>mcontoor@gmail.com</b>
                            </a>{' '}
                            or Drop in a message below!
                        </p>
                        <br />
                        <form
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <p hidden>
                                <label>
                                    Don’t fill this out:{' '}
                                    <input
                                        name="bot-field"
                                        onChange={handleChange}
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Your name:
                                    <br />
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        placeholder="Jane Doe"
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Your email:
                                    <br />
                                    <input
                                        className="form-input"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder="janedoe@mail.com"
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Message:
                                    <br />
                                    <textarea
                                        className="form-message"
                                        name="message"
                                        onChange={handleChange}
                                        placeholder="Write your message here!"
                                    />
                                </label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default Contact;
