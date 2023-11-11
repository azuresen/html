const readline = require('readline');
const characters = [
  { name: 'Kenshin Himura', gender: 'Laki-laki', role: 'Protagonis' },
  { name: 'Tomoe Yukishiro', gender: 'Perempuan', role: 'Protagonis' },
  { name: 'Makoto Shishio', gender: 'Laki-laki', role: 'Antagonis' },
  { name: 'Saito Hajime', gender: 'Laki-laki', role: 'Protagonis' },
  { name: 'Kaoru Kamiya', gender: 'Perempuan', role: 'Protagonis' },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayCharactersByGender(gender) {
  const filteredCharacters = characters.filter(character => character.gender === gender);
  if (filteredCharacters.length === 0) {
    console.log(`Tidak ada karakter dengan jenis kelamin ${gender}.`);
  } else {
    console.log(`Daftar karakter dengan jenis kelamin ${gender}:`);
    filteredCharacters.forEach(character => console.log(`- ${character.name}, peran: ${character.role}`));
  }
}

function displayCharactersByRole(role) {
  const filteredCharacters = characters.filter(character => character.role === role);
  if (filteredCharacters.length === 0) {
    console.log(`Tidak ada karakter dengan peran ${role}.`);
  } else {
    console.log(`Daftar karakter dengan peran ${role}:`);
    filteredCharacters.forEach(character => console.log(`- ${character.name}, jenis kelamin: ${character.gender}`));
  }
}
console.log('menampilkan character samurai x dan peran nya ')
console.log('Pilih opsi:');
console.log('1. Menampilkan Daftar Karakter Berdasarkan Jenis Kelamin');
console.log('2. Menampilkan Daftar Karakter Berdasarkan Peran');


rl.question('Masukkan nomor opsi (1/2): ', (option) => {
  if (option === '1') {
    rl.question('Masukkan jenis kelamin karakter (Laki-laki/Perempuan): ', (gender) => {
      displayCharactersByGender(gender);
      rl.close();
    });
  } else if (option === '2') {
    rl.question('Masukkan peran karakter (Protagonis/Antagonis): ', (role) => {
      displayCharactersByRole(role);
      rl.close();
    });
  } else {
    console.log('Operasi yang Anda masukkan tidak valid.');
    rl.close();
  }
});
