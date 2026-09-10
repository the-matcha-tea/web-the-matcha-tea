// =====================================================
// ANIMATIONS — AOS (Animate On Scroll) & GSAP
// Kehadiran library bersifat opsional:
// kalau CDN gagal termuat, konten tetap tampil normal.
// =====================================================

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------------- AOS (reveal on scroll) ----------------
if (!prefersReducedMotion && typeof window.AOS !== "undefined") {
  window.AOS.init({
    duration: 700,
    easing: "ease-out-quad",
    once: true,
    offset: 80,
  });
}

// ---------------- GSAP ----------------
if (typeof window.gsap !== "undefined") {
  const gsap = window.gsap;
  const hasScrollTrigger = typeof window.ScrollTrigger !== "undefined";
  if (hasScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  if (!prefersReducedMotion) {
    initHeroEntrance(gsap, hasScrollTrigger);
    initDetailEntrance(gsap);
    initWAFloat(gsap);
  }
}

// Hero (index): masuk berurutan + ilustrasi mengambang & parallax
function initHeroEntrance(gsap, hasScrollTrigger) {
  const hero = document.getElementById("home");
  if (!hero) return;

  const parts = [
    hero.querySelector(".hero-eyebrow"),
    hero.querySelector(".hero-title"),
    hero.querySelector(".hero-illustration"),
    hero.querySelector(".hero-ctas"),
    hero.querySelector(".slideshow-container"),
  ].filter(Boolean);

  if (parts.length) {
    gsap.from(parts, {
      y: 26,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
      delay: 0.1,
    });
  }

  // Ilustrasi mengambang halus terus-menerus
  const illustrationImg = hero.querySelector(".hero-illustration img");
  if (illustrationImg) {
    gsap.to(illustrationImg, {
      yPercent: -8,
      duration: 2.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }

  // Parallax halus saat scroll
  const illustration = hero.querySelector(".hero-illustration");
  if (illustration && hasScrollTrigger) {
    gsap.to(illustration, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
}

// Halaman detail menu: kartu detail muncul dengan halus
function initDetailEntrance(gsap) {
  const card = document.querySelector(".detail-card");
  if (!card) return;

  gsap.from(card, {
    y: 32,
    autoAlpha: 0,
    scale: 0.98,
    duration: 0.9,
    ease: "power3.out",
    delay: 0.1,
  });
}

// Bubble WhatsApp muncul dengan efek pop
function initWAFloat(gsap) {
  const bubble = document.querySelector(".wa-float");
  if (!bubble) return;

  gsap.from(bubble, {
    scale: 0,
    autoAlpha: 0,
    duration: 0.6,
    delay: 0.9,
    ease: "back.out(1.8)",
  });
}