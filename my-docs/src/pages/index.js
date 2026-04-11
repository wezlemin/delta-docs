import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home">
      <main style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1>Welcome to {siteConfig.title}!</h1>

        <p>{siteConfig.tagline}</p>

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
