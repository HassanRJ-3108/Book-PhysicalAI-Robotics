import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import ChapterCards from '@site/src/components/ChapterCards';
import QuickLinks from '@site/src/components/QuickLinks';

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
            <div className="homepage-grid">
              <div>
                <ChapterCards />
              </div>
              <div>
                <QuickLinks />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
