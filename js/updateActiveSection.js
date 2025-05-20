function updateActiveMenu() {
    const currentHash = window.location.hash || '#home'; // Default to #home
    const navLinks = document.querySelectorAll('.nav-desktop a');
  
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentHash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Run on initial load
  document.addEventListener('DOMContentLoaded', updateActiveMenu);
  
  // Run when hash changes (e.g., user clicks a menu link or navigates via URL)
//   window.addEventListener('hashchange', updateActiveMenu);