/**
 * Interactive Engine: Kenyan Forex Ecosystem Assessment
 * File: interactions.js
 */

export const MotionPref = {
  get isReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
};

export const Easing = {
  easeOutQuad: (t) => t * (2 - t)
};

// --- DATA COUNTERS (LCP Optimized) ---
export class CounterController {
  constructor(element) {
    this.element = element;
    this.targetValue = parseFloat(this.element.dataset.target || 0);
    this.duration = parseInt(this.element.dataset.duration || 2000, 10);
    this.decimals = this.targetValue % 1 !== 0 ? 1 : 0;
    this.hasAnimated = false;
  }

  start() {
    if (this.hasAnimated) return;
    this.hasAnimated = true;

    if (MotionPref.isReduced) {
      this.element.textContent = this.targetValue.toFixed(this.decimals);
      return;
    }

    let startTime = null;

    const tick = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      
      const current = (this.targetValue * Easing.easeOutQuad(progress)).toFixed(this.decimals);
      this.element.textContent = current;

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}

// --- ATTACK SURFACE SLIDER (Throttled) ---
export class SliderController {
  constructor(container) {
    this.container = container;
    this.divider = container.querySelector('.drag-handle');
    this.isDragging = false;
    this.rafPending = false;
    
    this.initEvents();
  }

  initEvents() {
    this.divider.addEventListener('mousedown', () => this.isDragging = true);
    window.addEventListener('mouseup', () => this.isDragging = false);
    
    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging || this.rafPending) return;
      
      this.rafPending = true;
      // Performance: Decouple layout reads/writes
      requestAnimationFrame(() => {
        this.updateSliderPosition(e.clientX);
        this.rafPending = false;
      });
    });
  }

  updateSliderPosition(clientX) {
    const rect = this.container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    this.container.style.setProperty('--slider-pos', `${percentage}%`);
  }
}

// --- GLOBAL OBSERVER ---
export const initObservers = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.hasAttribute('data-counter')) {
        new CounterController(entry.target).start();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
};
