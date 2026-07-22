import React from 'react';

export const DecryptCard: React.FC = () => {
  return (
    <div style={{ marginTop: '1.5rem', width: '100%' }}>
      <style>{`
        .decrypt-card {
          position: relative;
          width: 100%;
          min-height: 120px;
          border: 1px dashed var(--color-base-darkgrey);
          background-color: var(--color-base-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: crosshair;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .decrypt-card:hover {
          border: 1px solid var(--color-base-cyan);
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.2);
        }

        .decrypt-content-encrypted {
          position: absolute;
          font-family: monospace;
          color: var(--color-base-offwhite);
          opacity: 1;
          transition: opacity 0.3s ease, transform 0.3s ease;
          text-align: center;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .decrypt-content-decrypted {
          position: absolute;
          font-family: monospace;
          color: var(--color-base-cyan);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
          text-align: center;
          transform: scale(0.95);
          width: 90%;
        }

        .decrypt-card:hover .decrypt-content-encrypted {
          opacity: 0;
          transform: scale(1.05);
        }

        .decrypt-card:hover .decrypt-content-decrypted {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <div className="decrypt-card">
        <div className="decrypt-content-encrypted">
          [ ENCRYPTED ASSET: LUXURY VEHICLE ]
        </div>
        <div className="decrypt-content-decrypted">
          <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-base-red)' }}>DECRYPTED: Heuristic Proxy Indicator.</strong>
          Weaponized conspicuous consumption used to bypass cognitive skepticism via authority bias.
        </div>
      </div>
    </div>
  );
};
