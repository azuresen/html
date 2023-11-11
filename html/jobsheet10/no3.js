// menggunakan setTimeout untuk menjalankan fungsi secara asyncronous
console.log("Langkah awal: Memulai proses.")

setTimeout(function(){
    console.log( "Langkah kedua: Proses pertama akan selesai dalam 1 detik."); // pesan ini akan dcetak terakhir setelah 3 detik 
}, 1000); 
setTimeout(function(){
    console.log("Langkah ketiga: Proses kedua akan selesai dalam 2 detik"); // pesan ini akan dicetak kedua setelah 2 detik
}, 2000);

setTimeout(function(){
    console.log("Langkah terakhir: Proses selesai."); // pesan ini akan dicetak kedua setelah 2 detik
}, 3000);