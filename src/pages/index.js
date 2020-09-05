import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
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
                    maxWidth: `300px`,
                    marginBottom: `1.45rem`,
                    height: '200px',
                    width: '100px',
                    border: '1px solid #000  ',
                }}
            >
                <Image />
            </div>
            <div>
                <h1>Meghna Contoor</h1>
                <p>Full Stack Developer</p>
                <p>Now go build something great.</p>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
