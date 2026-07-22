import React, { useState } from 'react';

export const MoneyFlowToggle: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'CPA' | 'RevShare' | null>(null);

  return (
    <div style={{ backgroundColor: 'var(--color-base-navy)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--color-base-darkgrey)' }}>
      <h4 style={{ color: 'var(--color-base-orange)', marginBottom: '2rem', fontFamily: 'monospace' }}>[ WIDGET: COMPENSATION MODELS ]</h4>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* CPA Card */}
        <div 
          onClick={() => setActiveModel('CPA')}
          style={{
            cursor: 'pointer',
            padding: '2rem',
            backgroundColor: 'var(--bg-surface)',
            border: `2px solid ${activeModel === 'CPA' ? 'var(--color-base-orange)' : 'var(--color-base-darkgrey)'}`,
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            boxShadow: activeModel === 'CPA' ? '0 0 15px rgba(255, 107, 53, 0.3)' : 'none'
          }}
        >
          <h3 style={{ color: 'var(--color-base-offwhite)', marginBottom: '1rem', textAlign: 'center', fontSize: '1.2rem', fontFamily: 'monospace' }}>CPA</h3>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '0.8rem', fontFamily: 'monospace', textTransform: 'uppercase' }}>Tap to decode logic</p>
        </div>

        {/* RevShare Card */}
        <div 
          onClick={() => setActiveModel('RevShare')}
          style={{
            cursor: 'pointer',
            padding: '2rem',
            backgroundColor: 'var(--bg-surface)',
            border: `2px solid ${activeModel === 'RevShare' ? 'var(--color-base-orange)' : 'var(--color-base-darkgrey)'}`,
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            boxShadow: activeModel === 'RevShare' ? '0 0 15px rgba(255, 107, 53, 0.3)' : 'none'
          }}
        >
          <h3 style={{ color: 'var(--color-base-offwhite)', marginBottom: '1rem', textAlign: 'center', fontSize: '1.2rem', fontFamily: 'monospace' }}>REV-SHARE</h3>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '0.8rem', fontFamily: 'monospace', textTransform: 'uppercase' }}>Tap to decode logic</p>
        </div>

      </div>

      {/* Logic Reveal Panel */}
      <div style={{
        marginTop: '2rem',
        minHeight: '120px',
        padding: '1.5rem',
        backgroundColor: activeModel ? 'var(--bg-primary)' : 'transparent',
        border: activeModel ? '1px solid var(--color-base-orange)' : 'none',
        borderRadius: '8px',
        color: 'var(--color-base-offwhite)',
        transition: 'all 0.3s ease'
      }}>
        {!activeModel && (
          <div style={{ color: 'var(--text-secondary)', textAlign: 'center', fontStyle: 'italic', fontFamily: 'monospace' }}>
             Select a compensation model to decode the financial incentive.
          </div>
        )}
        
        {activeModel === 'CPA' && (
          <div>
            <strong style={{ color: 'var(--color-base-orange)', display: 'block', marginBottom: '1rem', fontSize: '1.1rem', fontFamily: 'monospace' }}>[ CPA ALGORITHM: ONE-TIME BOUNTY ]</strong>
            <p style={{ lineHeight: '1.6', fontFamily: 'monospace' }}>
              The influencer receives a fixed bounty (e.g., $100-$500) the moment a referred user deposits their first KES 1,300. The influencer's incentive ends there. Their goal is massive volume and rapid churn, completely ignoring the user's long-term trading success.
            </p>
          </div>
        )}

        {activeModel === 'RevShare' && (
          <div>
            <strong style={{ color: 'var(--color-base-red)', display: 'block', marginBottom: '1rem', fontSize: '1.1rem', fontFamily: 'monospace' }}>[ REVSHARE ALGORITHM: STRUCTURAL CONFLICT ]</strong>
            <p style={{ lineHeight: '1.6', fontFamily: 'monospace' }}>
              The influencer earns a percentage (up to 50%) of the broker's spread on every trade the user executes. If a user utilizes 1:2000 leverage, the spread is magnified proportionally. Even if the user's account is wiped out in a single trade, the influencer and the offshore broker split the guaranteed spread revenue. <span style={{ color: 'var(--color-base-red)' }}>They profit directly from the user's high-frequency ruin.</span>
            </p>
          </div>
        )}
      </div>

    </div>
  );
};
