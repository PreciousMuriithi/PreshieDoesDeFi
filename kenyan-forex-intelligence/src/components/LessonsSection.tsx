import React from 'react';

export const LessonsSection: React.FC = () => {
  return (
    <section className="l-section" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="l-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: 'var(--color-base-cyan)', fontFamily: 'monospace', marginBottom: '2rem' }}>[ PHASE 06: DEBRIEF & LESSONS ]</h2>
        <div style={{ padding: '2rem', borderLeft: '4px solid var(--color-base-offwhite)', backgroundColor: 'var(--bg-surface)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-base-offwhite)' }}>Sentry Protocol: Mitigation</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            To defend against this, we must enforce strict security boundaries at both the architectural and operational levels.
          </p>
          <ul style={{ paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--color-base-cyan)' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--color-base-offwhite)' }}>Algorithmic Skepticism:</strong> 
              Treat high-frequency displays of luxury on social media not as evidence of trading edge, but as psychological engineering designed to establish false authority.
            </li>
            <li>
              <strong style={{ color: 'var(--color-base-offwhite)' }}>Regulatory Arbitrage Awareness:</strong> 
              Understand that brokers offering 1:2000 leverage are structurally positioned to profit from your immediate liquidation. The house always wins.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
