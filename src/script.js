// Particle.js
if (window.tsParticles) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  tsParticles.load("tsparticles", {
    fpsLimit: 120,
    fullScreen: { enable: true, zIndex: -1 }, // Fullscreen disamakan
    detectRetina: true,
    particles: {
      number: {
        value: 80, // Sama dengan kode pertama
        density: {
          enable: true,
          area: 800, // Disamakan dengan kode pertama
        },
      },
      color: {
        value: "#22d3ee", // Warna diubah menjadi cyan agar sesuai tema
      },
      shape: {
        type: "circle", // Bentuk partikel tetap sama
      },
      opacity: {
        value: 0.8, // Sama dengan kode pertama
        animation: {
          enable: true,
          speed: 1, // Sesuaikan dengan animasi dari kode pertama
          opacity_min: 0.5,
        },
      },
      size: {
        value: 3, // Sama dengan ukuran partikel di kode pertama
        animation: {
          enable: true,
          speed: 3, // Sesuaikan kecepatan animasi ukuran
          size_min: 0.1,
        },
      },
      links: {
        enable: true,
        distance: 150, // Sesuaikan jarak link partikel
        color: "#22d3ee", // Warna link disesuaikan dengan tema
        opacity: 0.4, // Sama dengan opacity dari kode pertama
        width: 1,
      },
      move: {
        enable: true,
        speed: 1, // Kecepatan gerakan disesuaikan
        direction: "none",
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Sesuaikan mode hover dengan kode pertama
        },
        onClick: {
          enable: true,
          mode: "push", // Mode klik tetap sama
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 140,
          links: {
            opacity: 0.3,
          },
        },
        push: {
          quantity: 4, // Sesuaikan jumlah partikel yang dipush
        },
      },
    },
    background: {
      color: "transparent",
    },
  });
}

// --- Cursor Glow Effect ---
const glow = document.getElementById("cursor-glow");
const size = 384; // w-96 = 384px

if (glow) {
  document.addEventListener("mousemove", (e) => {
    // Tampilkan glow saat mouse bergerak
    glow.style.opacity = "1";

    // Posisi tengah cursor
    glow.style.left = `${e.clientX - size / 2}px`;
    glow.style.top = `${e.clientY - size / 2}px`;
  });

  // Sembunyikan saat mouse keluar window
  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}

// --- Card Hover Effect ---
// Fungsi helper untuk menambahkan event listener ke kartu
function addCardHoverEffect(selector, beforeClass, glowClass) {
  document.querySelectorAll(selector).forEach((card) => {
    const beforeEl = card.querySelector(beforeClass);
    const glowEl = card.querySelector(glowClass);

    // Pastikan elemen inner ada sebelum mengakses style
    if (!beforeEl || !glowEl) return;

    const showEffect = () => {
      beforeEl.style.opacity = "1";
      glowEl.style.opacity = "1";
    };

    const hideEffect = () => {
      beforeEl.style.opacity = "0";
      glowEl.style.opacity = "0";
    };

    card.addEventListener("mouseenter", showEffect);
    card.addEventListener("mouseleave", hideEffect);
    card.addEventListener("focusin", showEffect);
    card.addEventListener("focusout", hideEffect);
  });
}

// Terapkan efek ke kartu (pastikan struktur HTML kartu memiliki elemen inner yang sesuai)
addCardHoverEffect(".edu-card", ".card-before", ".card-glow");
addCardHoverEffect(".project-card", ".project-before", ".project-glow");

// --- Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// --- ScrollReveal Animation ---
if (typeof ScrollReveal !== "undefined") {
  // Overview Section
  ScrollReveal().reveal("#overview > div", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
    interval: 200,
    easing: "ease-in-out",
  });

  // Research Question Section
  ScrollReveal().reveal("#question h2, #question ol", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
    interval: 100,
    easing: "ease-in-out",
  });

  // Dashboard Section
  ScrollReveal().reveal("#dashboard > div, #dashboard > img", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
    interval: 200,
    easing: "ease-in-out",
  });

  // Insight Section
  ScrollReveal().reveal("#insight h2, #insight p, #insight .flex", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
    interval: 100,
    easing: "ease-in-out",
  });

  // Footer
  ScrollReveal().reveal("footer .flex, footer .my-4, footer .text-sm", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
    interval: 100,
    easing: "ease-in-out",
  });
}
