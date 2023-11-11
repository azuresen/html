// menggunakan setTimeout untuk menjalankan fungsi secara asyncronous
console.log("")

setTimeout(function(){
    console.log("langkah 3"); // pesan ini akan dcetak terakhir setelah 3 detik 
}, 3000); // 3000 sama ja dengan 3 detik 
console.log("langkah 1"); // pesan ini akan dicetak terlebih dahulu

setTimeout(function(){
    console.log("langkah 2"); // pesan ini akan dicetak kedua setelah 2 detik
}, 2000); // 2000 sama aja dengan 2 detik 