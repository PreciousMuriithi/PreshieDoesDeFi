import React from 'react';

export const EvidenceDrawer: React.FC = () => {
  return (
    <div style={{ marginTop: '1.5rem' }}>
      <style>{`
        .evidence-drawer-summary {
          list-style: none; /* Hide default triangle */
          cursor: pointer;
          font-family: monospace;
          color: var(--color-base-cyan);
          border: 1px solid var(--color-base-cyan);
          padding: 1rem;
          background-color: var(--bg-surface);
          transition: all 0.3s ease;
          display: block; /* Ensure it takes full width and hides default marker in some browsers */
        }
        .evidence-drawer-summary::-webkit-details-marker {
          display: none;
        }
        .evidence-drawer-summary:hover {
          background-color: rgba(0, 229, 255, 0.1);
        }
        details[open] .evidence-drawer-summary {
          border-bottom: 1px solid transparent; /* Remove bottom border to connect with content */
        }
        details[open] .evidence-drawer-content {
          animation: slideDown 0.4s ease-out forwards;
          transform-origin: top;
        }
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: scaleY(0);
          }
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
      <details style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--color-base-cyan)' }}>
        <summary className="evidence-drawer-summary">[ + ] ACCESS EVIDENCE TIMELINE</summary>
        <div className="evidence-drawer-content" style={{ padding: '1.5rem', overflow: 'hidden' }}>
          
          <div style={{
            borderLeft: '2px solid var(--color-base-cyan)',
            paddingLeft: '1.5rem',
            marginLeft: '0.5rem',
            position: 'relative'
          }}>
            
            {/* Timeline Item 1 */}
            <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '-1.85rem',
                top: '0.2rem',
                width: '12px',
                height: '12px',
                backgroundColor: 'var(--bg-primary)',
                border: '2px solid var(--color-base-cyan)',
                borderRadius: '50%'
              }}></div>
              <p style={{ color: 'var(--text-primary)', fontFamily: 'monospace', margin: 0, lineHeight: '1.4' }}>
                Viral Controversies & Fabricated Conflicts
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '-1.85rem',
                top: '0.2rem',
                width: '12px',
                height: '12px',
                backgroundColor: 'var(--bg-primary)',
                border: '2px solid var(--color-base-cyan)',
                borderRadius: '50%'
              }}></div>
              <p style={{ color: 'var(--text-primary)', fontFamily: 'monospace', margin: 0, lineHeight: '1.4' }}>
                The SIM2 Accusation (Transactional Benefactors)
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '-1.85rem',
                top: '0.2rem',
                width: '12px',
                height: '12px',
                backgroundColor: 'var(--bg-primary)',
                border: '2px solid var(--color-base-cyan)',
                borderRadius: '50%'
              }}></div>
              <p style={{ color: 'var(--text-primary)', fontFamily: 'monospace', margin: 0, lineHeight: '1.4' }}>
                Wash Wash (Money Laundering) Fronts
              </p>
            </div>

          </div>
        </div>
      </details>
    </div>
  );
};
