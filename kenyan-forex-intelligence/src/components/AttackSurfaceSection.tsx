import React from 'react';
import experienceData from '../data/experience.json';
import { ComparativeThreatPanel } from './widgets/ComparativeThreatPanel';

export const AttackSurfaceSection: React.FC = () => {
  const screen = experienceData.screens[5];

  return (
    <section className="l-section" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="l-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: 'var(--color-base-cyan)', fontFamily: 'monospace', marginBottom: '2rem' }}>[ PHASE 05: ATTACK SURFACE ]</h2>
        <div style={{ padding: '2rem', borderLeft: '4px solid var(--color-base-cyan)', backgroundColor: 'var(--bg-surface)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-base-cyan)' }}>{screen.concept}</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{screen.content_block}</p>
          {screen.interaction && screen.interaction.widget === 'AttackSurfaceSlider' ? (
            <ComparativeThreatPanel />
          ) : screen.interaction ? (
            <div style={{ marginTop: '1.5rem', padding: '1rem', border: '1px dashed var(--color-base-cyan)', color: 'var(--color-base-cyan)' }}>
              <strong>INTEL WIDGET:</strong> {screen.interaction.widget} - {screen.interaction.description}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
