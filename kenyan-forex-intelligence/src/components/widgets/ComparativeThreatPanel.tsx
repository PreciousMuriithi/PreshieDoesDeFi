import React from 'react';

export const ComparativeThreatPanel: React.FC = () => {
  return (
    <div style={{ marginTop: '2rem', width: '100%' }}>
      <style>{`
        .threat-panel-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          width: 100%;
        }

        .threat-column {
          background-color: var(--color-base-navy);
          padding: 2rem;
          border-radius: 8px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          font-family: monospace;
          display: flex;
          flex-direction: column;
        }

        .threat-column-secure {
          border: 1px solid var(--color-base-darkgrey);
          border-top: 4px solid var(--color-base-cyan);
        }

        .threat-column-secure:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 20px rgba(0, 229, 255, 0.15);
          border-color: var(--color-base-cyan);
        }

        .threat-column-vulnerable {
          border: 1px solid var(--color-base-darkgrey);
          border-top: 4px solid var(--color-base-orange);
        }

        .threat-column-vulnerable:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.15);
          border-color: var(--color-base-orange);
        }

        .threat-header {
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          text-align: center;
          letter-spacing: 1px;
        }

        .threat-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .threat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .threat-label {
          color: var(--text-secondary);
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .threat-value {
          color: var(--color-base-offwhite);
          font-size: 1.1rem;
        }

        .text-secure {
          color: var(--color-base-cyan);
        }

        .text-vulnerable {
          color: var(--color-base-orange);
        }

        @media (max-width: 768px) {
          .threat-panel-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="threat-panel-container">
        
        {/* Left Column: Regulated */}
        <div className="threat-column threat-column-secure">
          <div className="threat-header text-secure">
            [ STATUS: SECURE ]<br />CMA LICENSED
          </div>
          <ul className="threat-list">
            <li className="threat-item">
              <span className="threat-label">Max Leverage</span>
              <span className="threat-value text-secure">1:400</span>
            </li>
            <li className="threat-item">
              <span className="threat-label">KYC Protocols</span>
              <span className="threat-value">Strict / Verified</span>
            </li>
            <li className="threat-item">
              <span className="threat-label">Min Capital</span>
              <span className="threat-value">KES 150,000,000</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Unregulated */}
        <div className="threat-column threat-column-vulnerable">
          <div className="threat-header text-vulnerable">
            [ STATUS: VULNERABLE ]<br />OFFSHORE BROKERS
          </div>
          <ul className="threat-list">
            <li className="threat-item">
              <span className="threat-label">Max Leverage</span>
              <span className="threat-value text-vulnerable">1:2000</span>
            </li>
            <li className="threat-item">
              <span className="threat-label">KYC Protocols</span>
              <span className="threat-value">Bypassed</span>
            </li>
            <li className="threat-item">
              <span className="threat-label">Min Deposit</span>
              <span className="threat-value text-vulnerable">KES 1,300 (Instant M-PESA)</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};
