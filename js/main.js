// --- LOGIKA SLIDESHOW HERO ---
const slide = {
  index: 1,
  timer: null,

  init() {
    this.show(this.index);
    this.auto();
  },

  // Pindah slide secara manual via tombol prev/next
  plus(n) {
    clearTimeout(this.timer);
    this.show((this.index += n));
    this.auto();
  },

  // Tampilkan slide yang aktif
  show(n) {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return; // aman jika elemen slide tidak ada

    if (n > slides.length) this.index = 1;
    if (n < 1) this.index = slides.length;

    Array.from(slides).forEach((el) => {
      el.style.display = "none";
    });
    slides[this.index - 1].style.display = "block";
  },

  // Ganti slide otomatis setiap 3 detik
  auto() {
    this.timer = setTimeout(() => {
      this.index++;
      this.show(this.index);
      this.auto();
    }, 3000);
  },
};

// --- LOGIKA MENU MOBILE (HAMBURGER) ---
const mobileMenu = {
  init() {
    const nav = document.getElementById("navMenu");
    const burger = document.getElementById("hamburger");
    if (!nav || !burger) return;

    const toggle = () => {
      nav.classList.toggle("active");
      burger.classList.toggle("active");
    };

    burger.addEventListener("click", toggle);

    // Tutup menu otomatis saat link navigasi diklik (khusus mobile)
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", toggle));
  },
};

document.addEventListener("DOMContentLoaded", () => {
  slide.init();
  mobileMenu.init();
});
