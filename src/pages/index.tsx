import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import Sections from '@site/src/components/Sections';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} · Physical AI & Robotics`}
      description="Premium Docusaurus book platform for Physical AI & Humanoid Robotics">
      <Hero />
      <main>
        <section style={{ padding: 'var(--space-12) 0' }}>
          <div className="container">
            <Sections />
          </div>
        </section>
      </main>
    </Layout>
  );
}
