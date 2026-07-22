/**
 * Animation Utilities: Kenyan Forex Ecosystem Assessment
 * File: animations.ts
 * Responsibility: Mathematical easing functions and JS-driven text animations.
 */

// Math-based deceleration for requestAnimationFrame counters
export const easeOutQuad = (t: number): number => t * (2 - t);

// Snappy deceleration
export const easeSnappy = (t: number): number => {
  const p = 1 - t;
  return 1 - p * p * p;
};

/**
 * Terminal Decrypt (Mission Briefing)
 * Linear text reveal at 15ms per character.
 */
export const terminalTypewriter = (
  text: string,
  onUpdate: (current: string) => void,
  onComplete: () => void,
  isReducedMotion: boolean
) => {
  if (isReducedMotion) {
    onUpdate(text);
    onComplete();
    return () => {};
  }

  let i = 0;
  const interval = setInterval(() => {
    onUpdate(text.substring(0, i));
    i++;
    if (i > text.length) {
      clearInterval(interval);
      onComplete();
    }
  }, 15);
  
  return () => clearInterval(interval);
};

/**
 * Cryptographic Scramble
 * Random character cycling for 250ms (used in Infrastructure Network Illumination).
 */
export const cryptographicScramble = (
  targetText: string,
  onUpdate: (current: string) => void,
  isReducedMotion: boolean
) => {
  if (isReducedMotion) {
    onUpdate(targetText);
    return () => {};
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
  const duration = 250;
  let start: number | null = null;
  let animationFrameId: number;

  const tick = (now: number) => {
    if (!start) start = now;
    const elapsed = now - start;
    
    if (elapsed >= duration) {
      onUpdate(targetText);
      return;
    }
    
    // Scramble logic
    let scrambled = '';
    for(let i=0; i < targetText.length; i++) {
       // Keep spaces intact
       if (targetText[i] === ' ') {
         scrambled += ' ';
       } else {
         scrambled += chars[Math.floor(Math.random() * chars.length)];
       }
    }
    
    onUpdate(scrambled);
    animationFrameId = requestAnimationFrame(tick);
  };
  
  animationFrameId = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(animationFrameId);
};
