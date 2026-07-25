// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.navbar a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          const linkTarget = link.getAttribute('href').replace('/#', '');
          link.classList.toggle('active', linkTarget === currentId);
        });
      }
    });
  }, {
    rootMargin: '-40% 0px -40% 0px', // ativa quando a secção está no "centro" do ecrã
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
});
document.querySelector(".menu-trigger").addEventListener("click", () => {
  document.querySelector(".navbar-mob").classList.toggle("show");
});