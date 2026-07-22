import React from 'react';
import experienceData from '../data/experience.json';
import { EvidenceDrawer } from './widgets/EvidenceDrawer';
import { DecryptCard } from './widgets/DecryptCard';

export const EvidenceSection: React.FC = () => {
  const screens = [experienceData.screens[3], experienceData.screens[4]];

  return (
    <section className="l-section" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="l-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: 'var(--color-base-cyan)', fontFamily: 'monospace', marginBottom: '2rem' }}>[ PHASE 03: THE EVIDENCE ]</h2>
        {screens.map((screen, idx) => (
          <div key={idx} style={{ marginBottom: '3rem', padding: '2rem', borderLeft: '4px solid var(--color-base-red)', backgroundColor: 'var(--bg-surface)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-base-red)' }}>{screen.concept}</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{screen.content_block}</p>
            {screen.supplementary_format && (
              <blockquote style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--color-base-orange)' }}>
                "{screen.supplementary_format.text}"
              </blockquote>
            )}
            {screen.interaction && screen.interaction.widget === 'EvidenceDrawer' ? (
              <EvidenceDrawer />
            ) : screen.interaction && screen.interaction.widget === 'PsychologicalFunnel' ? (
              <DecryptCard />
            ) : screen.interaction ? (
              <div style={{ marginTop: '1.5rem', padding: '1rem', border: '1px dashed var(--color-base-cyan)', color: 'var(--color-base-cyan)' }}>
                <strong>INTEL WIDGET:</strong> {screen.interaction.widget} - {screen.interaction.description}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};
