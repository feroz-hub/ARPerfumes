import type { Metadata } from 'next';
import CorporateStory, { metadata as corporateStoryMetadata } from '../CorporateStory';

export const metadata: Metadata = corporateStoryMetadata;

export default function CorporateStoryPage() {
  return (
    <main className="fe-main fe-ambient-drift">
      <CorporateStory />
    </main>
  );
}
