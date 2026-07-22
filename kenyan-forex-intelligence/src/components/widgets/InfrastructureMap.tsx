import React, { useState } from 'react';

export const InfrastructureMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, label: 'TikTok / IG', desc: 'Top-of-funnel viral content leveraging conspicuous consumption.' },
    { id: 2, label: 'Meta Pixels', desc: 'Retargeting algorithms harvesting vulnerable demographics.' },
    { id: 3, label: 'GitHub Pages', desc: 'Burnable routing directory bypassing link bans and corporate policies.' },
    { id: 4, label: 'Telegram VIP', desc: 'Final conversion zone pushing offshore broker affiliate links.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-base-navy)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--color-base-darkgrey)', position: 'relative' }}>
      <h4 style={{ color: 'var(--color-base-cyan)', marginBottom: '3rem', fontFamily: 'monospace' }}>[ WIDGET: INFRASTRUCTURE TRACE ]</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', paddingBottom: '2rem' }}>
        
        {/* Connecting line */}
        <div style={{ position: 'absolute', top: '30px', left: '60px', right: '60px', height: '2px', backgroundColor: 'var(--color-base-darkgrey)', zIndex: 0 }}></div>
        
        {nodes.map((node, idx) => {
          const isActive = activeNode === node.id;
          const isPast = activeNode !== null && activeNode >= node.id;
          
          return (
            <div 
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              style={{
                position: 'relative',
                zIndex: 1,
                cursor: 'pointer',
                textAlign: 'center',
                width: '100px'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 1rem',
                backgroundColor: isPast ? 'var(--color-base-cyan)' : 'var(--bg-surface)',
                border: `2px solid ${isPast ? 'var(--color-base-cyan)' : 'var(--color-base-darkgrey)'}`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 0 15px var(--color-base-cyan)' : 'none',
                color: isPast ? 'var(--color-base-navy)' : 'var(--color-base-offwhite)',
                fontWeight: 'bold',
                fontFamily: 'monospace'
              }}>
                {node.id}
              </div>
              <div style={{
                color: isPast ? 'var(--color-base-cyan)' : 'var(--color-base-offwhite)',
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                lineHeight: '1.4'
              }}>
                {node.label}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Node Description Panel */}
      <div style={{ 
        marginTop: '1rem', 
        minHeight: '80px',
        padding: '1.5rem', 
        backgroundColor: 'var(--bg-surface)', 
        borderLeft: `4px solid ${activeNode ? 'var(--color-base-cyan)' : 'transparent'}`,
        color: 'var(--color-base-offwhite)'
      }}>
        {activeNode ? (
          <div>
            <strong style={{ color: 'var(--color-base-cyan)', display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace' }}>NODE {activeNode}: {nodes[activeNode-1].label}</strong>
            <p style={{ fontFamily: 'monospace', lineHeight: '1.6' }}>{nodes[activeNode-1].desc}</p>
          </div>
        ) : (
          <div style={{ color: 'var(--text-secondary)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'monospace' }}>
            Click on a node to trace the data flow.
          </div>
        )}
      </div>
    </div>
  );
};
