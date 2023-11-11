const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Daftar produk pakaian
const produk = [
    { id: "1", nama: "batik", harga: 150000, stok: 50 },
    { id: "2", nama: "kemeja", harga: 200000, stok: 5 },
    { id: "3", nama: "jaket", harga: 300000, stok: 18 },
    { id: "1", nama: "jersey", harga: 250000, stok: 30 },
    { id: "2", nama: "jaz", harga: 200000, stok: 9 },
    { id: "3", nama: "kaos", harga: 300000, stok: 8 },
   
];

const riwayatPenjualan = [];
let totalPenjualan = 0;

// menampilkan isi dari produk yang telah di buat 
function tampilkanPakaian() {
    console.log("Inventaris Toko Pakaian:");
    produk.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - Rp${item.harga} - Stok: ${item.stok}`);
    });
    rl.question('Tambah Produk (y/n): ', (jawaban) => {
        if (jawaban.toLowerCase() === 'y') {
            tambahPakaian();
        } else if (jawaban.toLowerCase() === 'n') {
            mainMenu();
        } else {
            console.log("Pilihan tidak valid. Silakan coba lagi.");
            tampilkanPakaian();
        }
    });
}

function tambahPakaian() {
    rl.question("Masukkan nama produk baru: ", function (namaProduk) {
        rl.question("Masukkan harga produk baru: ", function (hargaProduk) {
            rl.question("Masukkan stok produk baru: ", function (stokProduk) {
                const idProduk = (produk.length + 1).toString(); // Buat ID baru berdasarkan jumlah produk yang ada
                const newProduk = { id: idProduk, nama: namaProduk, harga: parseInt(hargaProduk), stok: parseInt(stokProduk) };
                produk.push(newProduk);
                console.log(`Produk '${namaProduk}' telah ditambahkan.`);
                tampilkanPakaian();
            });
        });
    });
}

function hapusPakaian() {
    produk.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - Rp${item.harga} - Stok: ${item.stok}`);
    });
    rl.question("Masukkan ID produk yang ingin dihapus: ", function (idProduk) {
        const index = produk.findIndex(item => item.id === idProduk);
        if (index !== -1) {
            const namaProduk = produk[index].nama;
            produk.splice(index, 1);
            console.log(`Produk '${namaProduk}' telah dihapus.`);
        } else {
            console.log("Produk tidak ditemukan.");
        }
        mainMenu();
    });
}

function updateHargaProduk() {
  tampilkanPakaian();
  rl.question("Masukkan ID produk yang ingin diupdate harganya: ", function (idProduk) {
      const produkTerpilih = produk.find(item => item.id === idProduk);
      if (!produkTerpilih) {
          console.log("Produk tidak ditemukan.");
          mainMenu();
          return;
      }

      rl.question(`Harga saat ini untuk ${produkTerpilih.nama}: Rp${produkTerpilih.harga}. Masukkan harga baru: `, function (hargaBaru) {
          const harga = parseInt(hargaBaru);

          if (isNaN(harga) || harga <= 0) {
              console.log("Harga tidak valid. Silakan coba lagi.");
              updateHargaProduk();
              return;
          }

          const hargaLama = produkTerpilih.harga;
          produkTerpilih.harga = harga;

          // Memperbarui riwayat penjualan jika ada pesanan yang menggunakan produk ini
          riwayatPenjualan.forEach((penjualan) => {
              if (penjualan.produk.id === idProduk) {
                  const totalHargaBaru = penjualan.jumlah * harga;
                  totalPenjualan = totalPenjualan - (penjualan.totalHarga - totalHargaBaru);
                  penjualan.totalHarga = totalHargaBaru;
              }
          });

          console.log(`Harga ${produkTerpilih.nama} berhasil diupdate dari Rp${hargaLama} menjadi Rp${harga}.`);
          mainMenu();
      });
  });
}
  function belanja() {
    // Menampilkan daftar produk yang tersedia
    produk.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - Rp${item.harga} - Stok: ${item.stok}`);
    });
''
    rl.question("Masukkan nomor produk yang ingin Anda beli: ", function (nomorProduk) {
        const nomorIndex = parseInt(nomorProduk) - 1;

        if (isNaN(nomorIndex) || nomorIndex < 0 || nomorIndex >= produk.length) {
            console.log("Nomor produk tidak valid. Silakan coba lagi.");
            belanja();
            return;
        }

        const produkTerpilih = produk[nomorIndex];

        if (produkTerpilih.stok === 0) {
            console.log("Maaf, stok produk ini habis.");
            belanja();
            return;
        }

        rl.question(`Masukkan jumlah ${produkTerpilih.nama} yang ingin Anda beli: `, function (jumlahBeli) {
            const jumlah = parseInt(jumlahBeli);

            if (isNaN(jumlah) || jumlah <= 0 || jumlah > produkTerpilih.stok) {
                console.log("Jumlah beli tidak valid. Silakan coba lagi.");
                belanja();
                return;
            }

            const totalHarga = produkTerpilih.harga * jumlah;

            // Mengurangi stok produk yang dibeli
            produkTerpilih.stok -= jumlah;

            // Menambahkan pembelian ke riwayat penjualan
            riwayatPenjualan.push({
                produk: produkTerpilih,
                jumlah: jumlah,
                totalHarga: totalHarga
            });

            // Menambahkan total penjualan
            totalPenjualan += totalHarga;

            console.log(`Anda telah membeli ${jumlah} ${produkTerpilih.nama} dengan total harga Rp${totalHarga}.`);
            mainMenu();
        });
    });
}
function tutupKasir() {
  console.log("Total Penjualan saat ini: Rp" + totalPenjualan);
  rl.question("Apakah Anda yakin ingin menutup kasir? (y/n): ", function (jawaban) {
      if (jawaban.toLowerCase() === 'y') {
          console.log("Kasir telah ditutup.");
          rl.close();
      } else if (jawaban.toLowerCase() === 'n') {
          mainMenu(); // Kembali ke menu utama jika pengguna tidak ingin menutup kasir
      } else {
          console.log("Pilihan tidak valid. Silakan coba lagi.");
          tutupKasir(); // Ulangi proses jika input tidak valid
      }
  });
}


function tampilkanRiwayatPenjualan() {
  console.log("Riwayat Pesanan:");
  riwayatPenjualan.forEach((penjualan, index) => {
      console.log(`${index + 1}. ${penjualan.produk.nama} (${penjualan.jumlah}x) - Total: Rp${penjualan.totalHarga}`);
  });

  // Hitung total penjualan dari riwayat pesanan
  const totalPenjualanRiwayat = riwayatPenjualan.reduce((total, penjualan) => total + penjualan.totalHarga, 0);
  console.log(`Total Penjualan dari Riwayat: Rp${totalPenjualanRiwayat}`);

  mainMenu(); // Kembali ke menu utama setelah menampilkan riwayat pesanan
}
function mainMenu() {
    console.log("\nAplikasi toko pakaian sendy");
    console.log("1. Tampilkan isi pakaian");
    console.log("2. Tambah Produk");
    console.log("3. Hapus Produk");
    console.log("4. update harga produk");
    console.log("5. belanja")
    console.log("6. Tampilkan Riwayat Penjualan");
    console.log("7. Tutup pesanan");
    console.log("8. Keluar");
    rl.question("Pilih tindakan (1/2/3/4/5/6/7): ", function (pilihan) {
        if (pilihan === "1") {
            tampilkanPakaian();
        } else if (pilihan === "2") {
            tambahPakaian();
        } else if (pilihan === "3") {
            hapusPakaian();
        } else if (pilihan === "4") {
            updateHargaProduk();
        } else if (pilihan === "5") {
          belanja();
          } else if (pilihan === "6") {
            tampilkanRiwayatPenjualan();
        } else if (pilihan === "7") {
            tutupKasir();
        } else if (pilihan === "8") {
            console.log("Terima Kasih Sudah Mengunjungi Toko Kami ");
            rl.close();
        } else {
            console.log("Pilihan tidak valid. Silakan coba lagi.");
            mainMenu();
        }
    });
}

console.log("Selamat datang di Toko Pakaian bang sendy");
mainMenu();