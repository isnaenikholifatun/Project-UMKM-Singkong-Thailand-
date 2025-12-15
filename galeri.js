// galeri.js (ES6 Module)

// 1. Ambil semua gambar
const gambarProduk = document.querySelectorAll('.gambar-produk');

// 2. Elemen tempat menampilkan nama produk
const namaProduk = document.getElementById("nama-produk");

// 3. Fungsi klik (arrow function + template literal)
const tampilkanNama = (nama) => {
  namaProduk.textContent = `Produk: ${nama}`;
};

// 4. Tambahkan efek hover menggunakan classList
const tambahHover = (el) => el.classList.add("hover-aktif");
const hapusHover = (el) => el.classList.remove("hover-aktif");

// 5. Loop menggunakan forEach (ES6)
gambarProduk.forEach((img) => {
  // Destructuring
  const { dataset } = img;

  // Klik → tampilkan nama
  img.addEventListener("click", () => tampilkanNama(dataset.nama));

  // Hover effect
  img.addEventListener("mouseenter", () => tambahHover(img));
  img.addEventListener("mouseleave", () => hapusHover(img));
});

const cards = document.querySelectorAll(".galeri .card");

cards.forEach((card) => {
  const activate = () => {
    cards.forEach((c) => c.classList.remove("show-desc"));
    card.classList.add("show-desc");
  };

  card.addEventListener("click", (event) => {
    event.stopPropagation();
    const alreadyActive = card.classList.contains("show-desc");
    cards.forEach((c) => c.classList.remove("show-desc"));
    if (!alreadyActive) card.classList.add("show-desc");
  });

  card.addEventListener("mouseenter", activate);
  card.addEventListener("mouseleave", () => card.classList.remove("show-desc"));
});

export {}; // supaya file ini recognized sebagai module