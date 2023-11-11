// menggunakan setTimeout untuk menjalankan fungsi secara asyncronous
console.log( "Awal eksekusi.")

setTimeout(function(){
    console.log("pertama, saya akan dicetak setelah 2 detik."); // pesan ini akan dcetak terakhir setelah 3 detik 
}, 2000); // 3000 sama ja dengan 3 detik 
setTimeout(function(){
    console.log("Kedua, saya akan dicetak setelah 1 detik"); // pesan ini akan dicetak kedua setelah 2 detik
}, 3000); // 2000 sama aja dengan 2 detik 

setTimeout(function(){
    console.log("akhir eksekusi"); // pesan ini akan dicetak kedua setelah 2 detik
}, 4000);