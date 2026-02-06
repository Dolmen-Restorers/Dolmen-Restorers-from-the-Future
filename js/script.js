document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Toggle main mobile menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isActive = mobileMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isActive);
      hamburger.textContent = isActive ? '✕' : '☰';
    });
  }

  // Mobile submenu toggle (About Us → Recent / News / Videos)
  document.querySelectorAll('.mobile-dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // prevent navigation on first tap
        const parent = link.parentElement;
        parent.classList.toggle('active');

        // Optional: close other open dropdowns
        document.querySelectorAll('.mobile-dropdown').forEach(item => {
          if (item !== parent) item.classList.remove('active');
        });
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (hamburger && mobileMenu &&
        !hamburger.contains(e.target) &&
        !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    }
  });
});