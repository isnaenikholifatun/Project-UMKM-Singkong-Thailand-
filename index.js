// === Data Testimoni LENGKAP ===
const testimoni = [
    { text: "Produk enak dan lembut bangets asli dehhh!", source: "Aldila Pemalang - Jawa Tengah" },
    { text: "Topping kejunya melimpah bangetss gikass!", source: "Ari Maulida Surabaya - Jawa Timur" },
    { text: "Pelayanannya cepat dan ramah sekali gess!", source: "Mutiara Semarang - Jawa Tengah" },
    { text: "Harga sesuai kualitas, recommended sekali!", source: "Fadilah Zahra Kajen - Jawa Tengah" },
    { text: "Rasa manisnya pas, bikin ketagihan coyyy!", source: "Dwinta Vivian Kendal - Jawa Tengah" },
    { text: "Pengiriman cepat, josjisss", source: "Puspa Pemalang- Jawa Tengah" },
    { text: "Ketagihan untukkk order deh dijamin!", source: "Ramona Citarum - Jawa Tengah" }
];

const daftar = document.getElementById("daftarTestimoni"); // Target ke kontainer di atas

// === Perulangan (forEach) untuk membuat Card terpisah ===
testimoni.forEach((t) => {
    // 1. BUAT ELEMEN CARD (DIV) BARU
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("testimoni-card"); // Class untuk styling kotak putih

    // 2. Buat elemen Paragraf untuk Teks Testimoni
    const textP = document.createElement("p");
    textP.classList.add("testimoni-text");
    textP.textContent = "⭐ " + t.text; // Menambahkan bintang dan teks

    // 3. Buat elemen Span untuk Sumber/Nama
    const sourceSpan = document.createElement("span");
    sourceSpan.classList.add("testimoni-source");
    sourceSpan.textContent = "by: " + t.source;

    // 4. Susun elemen: Masukkan teks dan sumber ke dalam Card
    cardDiv.appendChild(textP);
    cardDiv.appendChild(sourceSpan);

    // 5. MASUKKAN CARD BARU KE DALAM KONTAINER UTAMA
    daftar.appendChild(cardDiv);
});