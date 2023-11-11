const readline = require('readline');

// Daftar karakter "Slam Dunk" beserta informasi mereka (nama, posisi, jumlah poin)
const characters = [
  { name: 'Hanamichi Sakuragi', position: 'Power Forward', points: 15 },
  { name: 'Ryota Miyagi', position: 'Point Guard', points: 10 },
  { name: 'Kaede Rukawa', position: 'Small Forward', points: 18 },
  { name: 'Takenori Akagi', position: 'Center', points: 12 },
  { name: 'Hisashi Mitsui', position: 'Shooting Guard', points: 14 },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayCharactersByPosition(position) {
  const filteredCharacters = characters.filter(character => character.position === position);
  if (filteredCharacters.length === 0) {
    console.log(`Tidak ada karakter dengan posisi ${position}.`);
  } else {
    console.log(`Daftar karakter dengan posisi ${position}:`);
    filteredCharacters.forEach(character => console.log(`- ${character.name}, ${character.points} poin`));
  }
}

function displayCharactersByPointsRange(minPoints, maxPoints) {
  const filteredCharacters = characters.filter(character => character.points >= minPoints && character.points <= maxPoints);
  if (filteredCharacters.length === 0) {
    console.log(`Tidak ada karakter dengan jumlah poin antara ${minPoints} dan ${maxPoints} poin.`);
  } else {
    console.log(`Daftar karakter dengan jumlah poin antara ${minPoints} dan ${maxPoints} poin:`);
    filteredCharacters.forEach(character => console.log(`- ${character.name}, ${character.points} poin`));
  }
}
console.log('menampilkan pemain anime slam dunk')
console.log('Pilih opsi:');
console.log('1. Menampilkan Daftar Karakter Berdasarkan Posisi');
console.log('2. Menampilkan Daftar Karakter Berdasarkan Jumlah Poin');
rl.question('Masukkan nomor operasi (1/2): ', (option) => {
  if (option === '1') {
    rl.question('Masukkan posisi karakter (Power Forward/Point Guard/Center/Small Forward/Shooting Guard): ', (position) => {
      displayCharactersByPosition(position);
      rl.close();
    });
  } else if (option === '2') {
    rl.question('Masukkan rentang jumlah poin (min-max): ', (pointsRange) => {
      const [minPoints, maxPoints] = pointsRange.split('-').map(Number);
      displayCharactersByPointsRange(minPoints, maxPoints);
      rl.close();
    });
  } else {
    console.log('Operasi yang Anda masukkan tidak valid.');
    rl.close();
  }
});
