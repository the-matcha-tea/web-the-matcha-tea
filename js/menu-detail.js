// Ganti nomor WhatsApp di sini (format: kode negara + nomor, tanpa + / 0 di depan)
const WA_NUMBER = "6283168101499";

// Data tiap menu. Tambahkan item baru di sini kalau menunya nambah.
const MENU_DATA = {
  "matcha-milk": {
    title: "Matcha Milk",
    category: "Drink",
    size: "250ml",
    price: "IDR 15.000",
    image: "image/Matcha_Bottle.jpeg",
    desc: "Perpaduan matcha premium dan susu segar yang creamy, menghadirkan rasa earthy yang lembut di setiap tegukan. Cocok dinikmati dingin untuk menemani hari yang jenuh.",
  },
  "milk-tea": {
    title: "Milk Tea",
    category: "Drink",
    size: "250ml",
    price: "IDR 15.000",
    image: "image/Milktea_Bottle.jpeg",
    desc: "Teh susu klasik dengan rasa yang autentik dan lembut, diracik dengan bahan premium untuk memberikan pengalaman minum yang menyegarkan dan manisnya tidak membosankan.",
  },
};

function renderMenuDetail() {
  const params = new URLSearchParams(window.location.search);
  const itemKey = params.get("item");
  const item = MENU_DATA[itemKey] || MENU_DATA["matcha-milk"];

  document.title = `${item.title} - The Matcha.tea`;
  document.getElementById("itemImage").src = item.image;
  document.getElementById("itemImage").alt = item.title;
  document.getElementById("itemCategory").textContent = item.category;
  document.getElementById("itemTitle").textContent = item.title;
  document.getElementById("itemSize").textContent = item.size;
  document.getElementById("itemDesc").textContent = item.desc;
  document.getElementById("itemPrice").textContent = item.price;

  const message = `Halo, saya mau pesan ${item.title} (${item.price}).`;
  document.getElementById("orderBtn").href =
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.addEventListener("DOMContentLoaded", renderMenuDetail);
