import React, { useState } from 'react';

export interface SuspectData {
  id: string;
  name: string;
  tactics: string[];
}

export interface InvestigationSectionProps {
  suspectData: SuspectData[];
}

export const InvestigationSection: React.FC<InvestigationSectionProps> = ({ suspectData }) => {
  // State
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Events
  const handleCardClick = (id: string) => setActiveCardId(id);
  const handleHorizontalScroll = (progress: number) => setScrollProgress(progress);

  return (
    <section className="l-section">
      <div className="l-container">
        {/* EvidenceBoardContainer, SuspectCard, TacticRevealOverlay */}
      </div>
    </section>
  );
};
