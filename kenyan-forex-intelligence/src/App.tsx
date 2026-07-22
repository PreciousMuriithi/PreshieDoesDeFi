import React, { useEffect, useState } from 'react';
import { initObservers } from './utils/interactions';

// Modular Components
import { MissionSection } from './components/MissionSection';
import { InvestigationSection } from './components/InvestigationSection';
import { EvidenceSection } from './components/EvidenceSection';
import { ThreatAnalysisSection } from './components/ThreatAnalysisSection';
import { AttackSurfaceSection } from './components/AttackSurfaceSection';
import { LessonsSection } from './components/LessonsSection';

export default function AppLayout() {
  const [missionAccepted, setMissionAccepted] = useState(false);

  useEffect(() => {
    // Initialize performance-optimized scroll & counter observers
    initObservers();
  }, []);

  return (
    <div className={`l-app-wrapper ${!missionAccepted ? 'is-scroll-locked' : ''}`}>
      
      {/* 
        Phase 1: Mission Briefing 
        Forces the user to accept the macroeconomic reality of the 15.2% youth unemployment[cite: 2, 3].
      */}
      <MissionSection onAccept={() => setMissionAccepted(true)} />

      {missionAccepted && (
        <main className="l-main-content">
          
          {/* 
            Phase 2: The Investigation
            Horizontal panning evidence board decoding 'SIM2' and conspicuous consumption[cite: 2].
          */}
          <InvestigationSection />
          
          {/* 
            Phase 3: The Evidence
            Network graph of CPA/RevShare financial flows (Pre-computed node X/Y positions)[cite: 2].
          */}
          <EvidenceSection />
          
          {/* 
            Phase 4: Threat Analysis 
            2D Interactive Threat Matrix with hardware-accelerated tooltips[cite: 3].
          */}
          <ThreatAnalysisSection />
          
          {/* 
            Phase 5: Attack Surface
            Throttled split-screen slider comparing CMA vs Offshore[cite: 2, 3].
          */}
          <AttackSurfaceSection />
          
          {/* 
            Phase 6: Lessons
            Debrief accordion using transform: scaleY() to prevent layout thrashing[cite: 3].
          */}
          <LessonsSection />
          
        </main>
      )}
    </div>
  );
}
