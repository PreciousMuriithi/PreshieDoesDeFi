import React from 'react';
import experienceData from '../data/experience.json';
import { InfrastructureMap } from './widgets/InfrastructureMap';
import { MoneyFlowToggle } from './widgets/MoneyFlowToggle';

export const InvestigationSection: React.FC = () => {
  const screens = [experienceData.screens[1], experienceData.screens[2]];

  return (
    <section className="l-section" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="l-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: 'var(--color-base-cyan)', fontFamily: 'monospace', marginBottom: '2rem' }}>[ PHASE 02: THE INVESTIGATION ]</h2>
        
        {/* Screen 02: Infrastructure Map */}
        <div style={{ marginBottom: '3rem', padding: '2rem', borderLeft: '4px solid var(--color-base-orange)', backgroundColor: 'var(--bg-surface)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-base-orange)', fontFamily: 'monospace' }}>{screens[0].concept}</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontFamily: 'monospace', marginBottom: '2rem' }}>{screens[0].content_block}</p>
          <InfrastructureMap />
        </div>

        {/* Screen 03: Money Flow */}
        <div style={{ marginBottom: '3rem', padding: '2rem', borderLeft: '4px solid var(--color-base-orange)', backgroundColor: 'var(--bg-surface)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-base-orange)', fontFamily: 'monospace' }}>{screens[1].concept}</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontFamily: 'monospace', marginBottom: '2rem' }}>{screens[1].content_block}</p>
          <MoneyFlowToggle />
        </div>

      </div>
    </section>
  );
};
