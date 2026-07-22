import React from 'react';

export const ThreatAnalysisSection: React.FC = () => {
  return (
    <section className="l-section" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="l-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: 'var(--color-base-cyan)', fontFamily: 'monospace', marginBottom: '2rem' }}>[ PHASE 04: THREAT ANALYSIS ]</h2>
        <div style={{ padding: '2rem', borderLeft: '4px solid #F4A261', backgroundColor: 'var(--bg-surface)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#F4A261' }}>Threat Matrix Overlay</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            We categorized and quantified the ecosystem's dangers into a formal intelligence framework, mapping specific threat vectors (such as Financial Exploitation, Money Laundering, and Psychological Manipulation) across Likelihood and Impact axes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2rem' }}>
             <div style={{ backgroundColor: 'var(--color-base-red)', padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>HIGH IMPACT / HIGH LIKELIHOOD</div>
             <div style={{ backgroundColor: 'var(--color-base-orange)', padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>MED IMPACT / HIGH LIKELIHOOD</div>
             <div style={{ border: '1px solid var(--color-base-cyan)', padding: '1rem', textAlign: 'center', color: 'var(--color-base-cyan)' }}>LOW IMPACT / MED LIKELIHOOD</div>
          </div>
        </div>
      </div>
    </section>
  );
};
