const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target =
      link.dataset.target ||
      link.textContent.trim().toLowerCase();

    pages.forEach(page => {
      if (page.dataset.page === target) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    window.scrollTo(0, 0);
  });
});

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

