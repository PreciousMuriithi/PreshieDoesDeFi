import React, { useState } from 'react';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State: currentMissionPhase (string: enum), isScrollLocked (boolean)
  const [currentMissionPhase, setCurrentMissionPhase] = useState<string>('INIT');
  const [isScrollLocked, setIsScrollLocked] = useState<boolean>(true);

  // Events: onPhaseComplete
  const handlePhaseComplete = () => {
    setIsScrollLocked(false);
  };

  return (
    <div className="l-app-wrapper" aria-hidden={isScrollLocked ? 'false' : 'true'}>
      <main className="l-main-content">
        {children}
      </main>
    </div>
  );
};
