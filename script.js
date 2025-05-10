document.addEventListener('DOMContentLoaded', () => {
    // === Filter Logic ===
    const filters = document.querySelectorAll('.filter');
    const cards = document.querySelectorAll('.project-card');
  
    filters.forEach(button => {
      button.addEventListener('click', () => {
        filters.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const filterValue = button.getAttribute('data-filter');
  
        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          card.style.display = (filterValue === 'all' || category === filterValue) ? 'block' : 'none';
        });
      });
    });
  
    // === Sidebar Icon Highlighting ===
    const path = window.location.pathname.toLowerCase();
    document.querySelectorAll('.sidebar .icon').forEach(icon => {
      const page = icon.getAttribute('data-page');
      if (page && path.includes(page)) {
        icon.classList.add('active');
      }
    });
  });
  