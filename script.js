document.addEventListener("DOMContentLoaded", () => {
  initVantaBackground();
  initParticles();
  initCursorGlow();
  initTypingEffect();
  initMobileMenu();
  initScrollReveal();
});

function initVantaBackground() {
  if (!window.VANTA) return;

  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x00f5ff,
    backgroundColor: 0x050816,
    points: 11.0,
    maxDistance: 22.0,
    spacing: 18.0,
    showDots: false,
  });
}

function initParticles() {
  if (!window.tsParticles) return;

  tsParticles.load("particles-js", {
    background: {
      color: "transparent",
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 36,
        density: {
          enable: true,
          area: 900,
        },
      },
      color: {
        value: ["#00f5ff", "#9b5cff", "#ffffff"],
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      opacity: {
        value: 0.72,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  });
}

function initCursorGlow() {
  const cursorGlow = document.getElementById("cursorGlow");
  if (!cursorGlow) return;

  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

function initTypingEffect() {
  const typingText = document.getElementById("typingText");
  if (!typingText) return;

  const phrases = [
    "Focused on learning and building.",
    "Frontend, Java, and real-world projects.",
    "Exploring modern software development.",
    "Growing through practice and consistency.",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = phrases[phraseIndex];
    typingText.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeEffect, 60);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 35);
      return;
    }

    isDeleting = !isDeleting;

    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(typeEffect, 950);
  }

  typeEffect();
}

function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.14,
    },
  );

  revealElements.forEach((element) => observer.observe(element));
}
