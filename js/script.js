  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      
      hamburger.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('active');
      
      // Optional: change icon to × when open
      hamburger.textContent = isExpanded ? '☰' : '✕';
    });

    // Close menu when clicking a link (optional but good UX)
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.textContent = '☰';
      });
    });
  });
