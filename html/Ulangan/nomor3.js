const readline = require('readline');

const members = [
  { name: 'zee', age: 19, position: 'Singer' },
  { name: 'ashel', age: 18, position: 'Dancer' },
  { name: 'freya', age: 17, position: 'Singer' },
  { name: 'olla', age: 18, position: 'Dancer' },
  { name: 'oniel', age: 21, position: 'Singer' },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMembersByPosition(position) {
  const filteredMembers = members.filter(member => member.position === position);
  if (filteredMembers.length === 0) {
    console.log(`Tidak ada anggota dengan posisi ${position}.`);
  } else {
    console.log(`Daftar anggota dengan posisi ${position}:`);
    filteredMembers.forEach(member => console.log(`- ${member.name}, ${member.age} tahun`));
  }
}

function displayMembersByAgeRange(minAge, maxAge) {
  const filteredMembers = members.filter(member => member.age >= minAge && member.age <= maxAge);
  if (filteredMembers.length === 0) {
    console.log(`Tidak ada anggota dalam rentang usia ${minAge}-${maxAge} tahun.`);
  } else {
    console.log(`Daftar anggota dalam rentang usia ${minAge}-${maxAge} tahun:`);
    filteredMembers.forEach(member => console.log(`- ${member.name}, ${member.age} tahun`));
  }
}
console.log('Selamat datang di manajemen JKT48 :');
console.log('pilih salah satu opsi ')
console.log('1. Menampilkan Daftar Anggota Berdasarkan Posisi');
console.log('2. Menampilkan Daftar Anggota Berdasarkan Umur');
rl.question('Masukkan nomor opsi (1/2): ', (option) => {
  if (option === '1') {
    rl.question('Masukkan posisi anggota (Singer/Dancer): ', (position) => {
      displayMembersByPosition(position);
      rl.close();
    });
  } else if (option === '2') {
    rl.question('Masukkan rentang umur (min-max): ', (ageRange) => {
      const [minAge, maxAge] = ageRange.split('-').map(Number);
      displayMembersByAgeRange(minAge, maxAge);
      rl.close();
    });
  } else {
    console.log('Opsi yang Anda masukkan tidak valid.');
    rl.close();
  }
});
