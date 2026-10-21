// Menu mobile : ouvre et ferme la liste de liens
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Ferme le menu après un clic sur un lien (affichage mobile)
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Souligne le lien du menu correspondant à la section affichée
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".menu a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => observer.observe(s));