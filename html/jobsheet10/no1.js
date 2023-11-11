// menggunakan setTimeout untuk menjalankan fungsi secara asyncronous
console.log("Langkah pertama: Saya akan dicetak terlebih dahulu")

setTimeout(function(){
    console.log("Langkah kedua: Saya akan dicetak kedua setelah 2 detik"); // pesan ini akan dcetak terakhir setelah 3 detik 
}, 2000); // 3000 sama ja dengan 3 detik 
setTimeout(function(){
    console.log("Langkah ketiga: Saya akan dicetak terakhir setelah 3 detik."); // pesan ini akan dicetak kedua setelah 2 detik
}, 3000); // 2000 sama aja dengan 2 detik 