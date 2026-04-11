import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <main style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1>Welcome to Delta Docs!</h1>
        <p>Click below to get started.</p>

        <a
          href="/delta-docs/docs/intro"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#25c2a0',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          Go to Introduction →
        </a>
      </main>
    </Layout>
  );
}
