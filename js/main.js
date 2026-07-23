/**
 * Alessio V3ntas FF — Main JS
 * Venta de cuentas de Free Fire
 */

(function () {
  'use strict';

  // ===== WhatsApp config =====
  const WHATSAPP_NUMBER = '1234567890'; // <-- Reemplaza con tu número real (sin + ni espacios)
  const buildWaLink = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  // Reemplaza todos los href de WhatsApp
  document.querySelectorAll('[data-wa]').forEach((el) => {
    el.setAttribute('href', buildWaLink(el.dataset.wa));
  });

  // ===== Cursor glow =====
  const cursor = document.getElementById('cursorGlow');
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0,
      mouseY = 0,
      glowX = 0,
      glowY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;
      cursor.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };
    animate();
  } else if (cursor) {
    cursor.style.display = 'none';
  }

  // ===== Scroll reveal =====
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.querySelector('.f-stat-num')) animateStats();
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // ===== Counter animation =====
  let statsAnimated = false;
  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    document.querySelectorAll('.f-stat-num').forEach((counter) => {
      const target = +counter.dataset.target;
      const duration = 2000;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(step);
        else counter.textContent = target;
      };
      requestAnimationFrame(step);
    });
  }

  // ===== FAQ toggle =====
  document.querySelectorAll('.faq-q').forEach((q) => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });

  // ===== Smooth nav =====
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== Navbar shadow on scroll =====
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 20) {
          navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        } else {
          navbar.style.boxShadow = 'none';
        }
      },
      { passive: true }
    );
  }

  // ===== Console signature =====
  console.log(
    '%c🔥 Alessio V3ntas FF',
    'background: linear-gradient(135deg,#a78bfa,#f0abfc,#60a5fa); color:#0a0a0f; padding:8px 16px; border-radius:8px; font-weight:700; font-size:14px;'
  );
})();
