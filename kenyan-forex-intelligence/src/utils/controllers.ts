// @ts-nocheck
/**
 * Interactive Threat Intelligence Microsite
 * Core JavaScript Architecture
 * 
 * Modular ES6 implementation handling interactions, accessibility, 
 * performance, and motion preferences.
 */

// ============================================================================
// 1. Core Utilities (utils.js)
// ============================================================================

export const MotionPref = {
  get isReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
};

export const Easing = {
  easeOutQuad: (t) => t * (2 - t),
  linear: (t) => t
};

export const DOM = {
  select: (selector, context = document) => context.querySelector(selector),
  selectAll: (selector, context = document) => [...context.querySelectorAll(selector)],
};

// ============================================================================
// 2. Animated Data Counters (CounterController.js)
// ============================================================================

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

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }
}

// ============================================================================
// 3. Threat Matrix & Tooltips (MatrixController.js)
// ============================================================================

export class MatrixController {
  constructor(container) {
    this.container = container;
    this.cells = DOM.selectAll('[role="gridcell"]', this.container);
    this.activeTooltip = null;
    
    this.initEvents();
  }

  initEvents() {
    this.cells.forEach(cell => {
      cell.addEventListener('mouseenter', (e) => this.showTooltip(e.target));
      cell.addEventListener('mouseleave', () => this.hideTooltip());
      cell.addEventListener('focus', (e) => this.showTooltip(e.target));
      cell.addEventListener('blur', () => this.hideTooltip());
    });

    // Global escape to dismiss tooltips
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeTooltip) {
        this.hideTooltip();
        this.activeTooltip.focus(); // Return focus to the cell
      }
    });
  }

  showTooltip(cell) {
    this.hideTooltip(); // Clear any existing
    
    const tooltipId = cell.getAttribute('aria-describedby');
    if (!tooltipId) return;

    const tooltip = document.getElementById(tooltipId);
    if (tooltip) {
      tooltip.setAttribute('aria-hidden', 'false');
      this.activeTooltip = cell;
      
      // Accessibility: Announce appearance
      tooltip.setAttribute('role', 'status');
    }
  }

  hideTooltip() {
    if (!this.activeTooltip) return;
    
    const tooltipId = this.activeTooltip.getAttribute('aria-describedby');
    const tooltip = document.getElementById(tooltipId);
    
    if (tooltip) {
      tooltip.setAttribute('aria-hidden', 'true');
      tooltip.removeAttribute('role');
    }
    this.activeTooltip = null;
  }
}

// ============================================================================
// 4. Evidence Expansion & Accordions (AccordionController.js)
// ============================================================================

export class AccordionController {
  constructor(container) {
    this.container = container;
    this.triggers = DOM.selectAll('[aria-expanded]', this.container);
    
    this.initEvents();
  }

  initEvents() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => this.toggle(e.currentTarget));
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggle(e.currentTarget);
        }
      });
    });
  }

  toggle(trigger) {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    const targetId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(targetId);
    
    if (!panel) return;

    // Close all others in the group (Optional: depends on UX spec)
    this.triggers.forEach(t => {
      if (t !== trigger) {
        t.setAttribute('aria-expanded', 'false');
        document.getElementById(t.getAttribute('aria-controls'))?.setAttribute('aria-hidden', 'true');
      }
    });

    // Toggle current
    trigger.setAttribute('aria-expanded', !isExpanded);
    panel.setAttribute('aria-hidden', String(isExpanded));
    
    // Focus management for screen readers
    if (!isExpanded) {
      panel.focus();
    }
  }
}

// ============================================================================
// 5. Smooth Scrolling & Navigation (NavigationController.js)
// ============================================================================

export class NavigationController {
  constructor(navLinks) {
    this.links = navLinks;
    this.initEvents();
  }

  initEvents() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        const hash = new URL(link.href).hash;
        if (!hash) return;

        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          this.scrollTo(target);
        }
      });
    });
  }

  scrollTo(target) {
    // Focus target for accessibility before scrolling
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });

    target.scrollIntoView({
      behavior: MotionPref.isReduced ? 'auto' : 'smooth',
      block: 'start'
    });
  }
}

// ============================================================================
// 6. Timeline & Viewport Observer (IntersectionController.js)
// ============================================================================

export class IntersectionController {
  constructor() {
    this.observers = new Map();
    this.initDefaultObserver();
  }

  initDefaultObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 
    };

    this.mainObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger Counters
          if (entry.target.hasAttribute('data-counter')) {
            const counter = new CounterController(entry.target);
            counter.start();
          }
          
          // Trigger Timeline animations
          if (entry.target.hasAttribute('data-timeline-reveal')) {
            entry.target.setAttribute('data-visible', 'true');
          }

          // Unobserve if it's a one-time event
          if (entry.target.hasAttribute('data-observe-once')) {
            this.mainObserver.unobserve(entry.target);
          }
        }
      });
    }, options);
  }

  observe(elements) {
    elements.forEach(el => this.mainObserver.observe(el));
  }
}

// ============================================================================
// 7. Bootstrapper (index.js)
// ============================================================================

export const AppInit = () => {
  document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Intersections (Counters, Timeline Reveals)
    const observer = new IntersectionController();
    observer.observe(DOM.selectAll('[data-counter], [data-timeline-reveal]'));

    // Initialize Threat Matrix
    const matrices = DOM.selectAll('.threat-matrix-container');
    matrices.forEach(matrix => new MatrixController(matrix));

    // Initialize Expanders / Accordions
    const accordions = DOM.selectAll('.evidence-drawer, .lessons-accordion');
    accordions.forEach(acc => new AccordionController(acc));

    // Initialize Navigation
    const navLinks = DOM.selectAll('a[href^="#"]');
    new NavigationController(navLinks);
    
  });
};
