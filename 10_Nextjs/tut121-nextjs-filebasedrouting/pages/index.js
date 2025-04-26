import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
  // Simulating dynamic data fetching
  const data = {
    featureList: ['Server-side Rendering', 'Static Site Generation', 'API Routes', 'Dynamic Routing', 'Image Optimization'],
  };

  return {
    props: {
      features: data.featureList,
    },
  };
}

const Index = ({ features }) => {
  return (
    <>
      {/* Adding Metadata for SEO */}
      <Head>
        <title>Next.js Page Routing Example</title>
        <meta name="description" content="Learn about page routing and Next.js features." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        {/* Page Heading */}
        <h1 style={{ color: '#0070f3' }}>Page Routing with Next.js</h1>

        {/* Navigation Links */}
        <nav style={{ marginBottom: '20px' }}>
          <Link href="/about" style={{ marginRight: '10px', color: '#0070f3' }}>
            About
          </Link>
          <Link href="/contact" style={{ color: '#0070f3' }}>
            Contact
          </Link>
        </nav>

        {/* Feature List */}
        <div>
          <h2>Key Features of Next.js</h2>
          <ul style={{ lineHeight: '1.8' }}>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <footer style={{ marginTop: '30px', fontSize: '0.9em', color: '#666' }}>
          <p>Powered by Next.js</p>
        </footer>
      </div>
    </>
  );
};

export default Index;
