import React, { useState, useEffect } from 'react';
import experienceData from '../data/experience.json';

export interface MissionSectionProps {
  onAccept: () => void;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ onAccept }) => {
  const [displayedText, setDisplayedText] = useState('');
  const screen = experienceData.screens[0];
  const fullText = screen.content_block;
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="l-section l-section--hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--bg-primary)' }}>
      <div className="l-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ color: 'var(--color-base-cyan)', fontFamily: 'monospace', marginBottom: '2rem' }}>{'>'} SYSTEM_INIT: {screen.concept}</h1>
        
        <div aria-live="polite" style={{ color: 'var(--color-base-offwhite)', fontFamily: 'monospace', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '3rem', minHeight: '120px' }}>
          {displayedText}
          <span style={{ borderRight: '10px solid var(--color-base-cyan)', animation: 'blink 1s step-end infinite' }}>&nbsp;</span>
        </div>

        {displayedText.length >= fullText.length && (
          <div style={{ textAlign: 'center', opacity: 1, transition: 'opacity 0.5s' }}>
             <div style={{ fontSize: '8rem', fontWeight: 'bold', color: 'var(--color-base-red)', lineHeight: '1', marginBottom: '1rem' }}>
                <span data-counter>15.2</span>%
             </div>
             <p style={{ color: 'var(--color-base-cyan)', marginBottom: '3rem', fontFamily: 'monospace' }}>
               {screen.supplementary_format?.text}
             </p>
             <button 
               onClick={onAccept}
               style={{ 
                 background: 'transparent', 
                 border: '2px solid var(--color-base-cyan)', 
                 color: 'var(--color-base-cyan)', 
                 padding: '1rem 2rem', 
                 fontSize: '1.5rem',
                 fontFamily: 'monospace',
                 cursor: 'pointer',
                 textTransform: 'uppercase',
                 letterSpacing: '2px'
               }}
               onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-base-cyan)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
               onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-base-cyan)'; }}
             >
               Accept Mission
             </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
};
