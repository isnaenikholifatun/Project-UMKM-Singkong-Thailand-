// Memberi tahu mahasiswa bahwa script berhasil di-load 
alert('Selamat datang di UMKM Singkong Thailand'); 
// Menampilkan informasi variabel di console 
const namaUMKM = 'Singkong Thailand'; 
console.log('Nama UMKM:', namaUMKM); 
// Demonstrasi variabel dan operator 
let produk = 4; 
console.log('Jumlah produk saat ini:', produk); 
produk += 2; 
console.log('Setelah penambahan:', produk);
// Tambahan penerapan variabel lain
let varianKeju = 1;
let varianGulaMerah = 1;
let varianKacangMix = 1;
let varianSausMullberry = 1;
let totalProduk =  varianKeju + varianGulaMerah + varianKacangMix + varianSausMullberry;
console.log('jumlah varianKeju:', varianKeju);
console.log('jumlah varianGulaMerah:', varianGulaMerah);
console.log('jumlah varianKacangMix:', varianKacangMix);
console.log('jumlah varianSausMullberry:', varianSausMullberry);
console.log('Total semua produk:', totalProduk);
// Tambahkan Form Webinar
document.getElementById("webinarForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let valid = true;
  let pesan = "";

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const hp = document.getElementById("hp").value.trim();
  const topik = document.getElementById("topik").value;
  const syarat = document.getElementById("syarat").checked;

  if (nama.length < 3) {
    pesan += "Nama minimal 3 karakter.<br>";
    valid = false;
  }

  if (!email.includes("@") || email.endsWith("@yahoo.com")) {
    pesan += "Gunakan email valid selain Yahoo.<br>";
    valid = false;
  }

  if (!/^[0-9]+$/.test(hp)) {
    pesan += "Nomor HP hanya boleh angka.<br>";
    valid = false;
  }

  if (topik === "") {
    pesan += "Silakan pilih topik webinar.<br>";
    valid = false;
  }

  if (!syarat) {
    pesan += "Harus menyetujui syarat & ketentuan.<br>";
    valid = false;
  }

  document.getElementById("errorMessage").innerHTML = pesan;

  if (valid) {
    alert("Pendaftaran berhasil!");
  }
});
