// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  // save theme
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggleBtn.innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i> Light Mode'
    : '<i class="fa-solid fa-moon"></i> Dark Mode';
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
  }

  revealSections();
});

// Reveal sections on scroll
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 80;

    if (isVisible) section.classList.add("show");
  });
}

window.addEventListener("scroll", revealSections);

// Animate Skills
const skillBars = document.querySelectorAll(".skill-level");

function animateSkills() {
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      const val = bar.dataset.skill;
      bar.style.width = val + "%";
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
