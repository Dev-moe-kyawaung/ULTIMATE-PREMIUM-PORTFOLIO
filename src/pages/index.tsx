// src/pages/index.tsx
import { Hero } from '@/components/Hero';
import { Dashboard } from '@/components/Dashboard';
import { MasonryGallery } from '@/components/MasonryGallery';
import { CaseStudyShowcase } from '@/components/CaseStudyShowcase';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moe Kyawaung - Full-Stack Developer</title>
        <meta name="description" content="Premium portfolio showcasing full-stack development expertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="overflow-hidden">
        <Hero />
        <Dashboard />
        <MasonryGallery />
        <CaseStudyShowcase />
      </main>
    </>
  );
}
