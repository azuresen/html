const players = ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr.", "Kylian Mbappé", "Sergio Ramos"];
const clubs = ["Paris Saint-Germain", "Manchester United", "Barcelona", "Paris Saint-Germain", "Paris Saint-Germain"];
const negara = ["Argentina", "Portugal", "Brazil", "France", "Spain"];

// Menggabungkan informasi pemain, klub, dan negara ke dalam satu array objek
const playerInfo = players.map((player, index) => ({
  name: player,
  club: clubs[index],
  negara : negara[index]
}));

console.log(playerInfo);