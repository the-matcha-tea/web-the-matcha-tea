// --- TOGGLE MENU MOBILE (HAMBURGER) ---
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('active');
  document.getElementById('hamburger').classList.toggle('active');
}

// Tutup menu otomatis saat link navigasi diklik (Khusus Mobile)
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('active');
    document.getElementById('hamburger').classList.remove('active');
  });
});


// --- LOGIKA SLIDESHOW HERO ---
let slideIndex = 1;
let slideTimer = null;

// Inisialisasi tampilan slideshow saat halaman dimuat
showSlides(slideIndex);
autoSlide();

// Fungsi berpindah slide secara manual melalui tombol Next/Prev
function plusSlides(n) {
  clearTimeout(slideTimer); // Hentikan timer sejenak agar gambar tidak langsung berganti secara tiba-tiba
  showSlides(slideIndex += n);
  autoSlide(); // Jalankan ulang timer otomatis
}

// Fungsi utama menampilkan slide aktif
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  
  if (slides.length === 0) return; // Mencegah error jika elemen slide tidak ada
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Sembunyikan semua slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Tampilkan slide yang sedang aktif
  slides[slideIndex - 1].style.display = "block";
}

// Fungsi transisi otomatis setiap 3 detik
function autoSlide() {
  slideTimer = setTimeout(function() {
    slideIndex++;
    showSlides(slideIndex);
    autoSlide();
  }, 3000); // Durasi per ganti gambar (3000ms = 3 detik)
}