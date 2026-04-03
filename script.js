document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Fade Up Animation on Scroll
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  fadeElements.forEach(el => observer.observe(el));

  // Global Comparison Slider Logic
  // Handles .comparison-slider (gallery) AND hero sliders if they use these classes
  const initSliders = () => {
    const sliderRanges = document.querySelectorAll('.comparison-range, #hero-range, #hero-mobile-range, #mini-range');
    
    sliderRanges.forEach(range => {
      const container = range.closest('.comparison-slider, .twentytwenty-container, .mini-slider-wrap');
      if (!container) return;

      const afterImage = container.querySelector('.comparison-after, .after-img, #hero-after, #hero-mobile-after, #mini-after');
      const handle = container.querySelector('.slider-handle, .slider-handle-hero, #hero-handle, #hero-mobile-handle, #mini-handle');
      
      if (!afterImage || !handle) return;

      range.addEventListener('input', (e) => {
        const value = e.target.value;
        afterImage.style.clipPath = `polygon(${value}% 0, 100% 0, 100% 100%, ${value}% 100%)`;
        handle.style.left = `${value}%`;
      });
    });
  };

  initSliders();
  
  // Smooth Scroll for Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
