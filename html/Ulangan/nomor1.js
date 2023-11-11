const readline = require('readline');

const agents = {
  Sova: {
    Role: 'Initiator',
    Ability: 'Recon Bolt, Shock Bolt, Owl Drone, Hunter\'s Fury'
  },
  Jett: {
    Role: 'Duelist',
    Ability: 'Cloudburst, Updraft, Blade Storm'
  },
  Cypher: {
    Role: 'Sentinel',
    Ability: 'Cyber Cage, Spy Camera, Trapwire, Neural Theft'
  },
  Brimstone: {
    Role: 'Controller',
    Ability: 'Incendiary, Sky Smoke, Stim Beacon, Orbital Strike'
  },
  Killjoy: {
    Role: 'Sentinel',
    Ability: 'Nanoswarm, Alarmbot, Lockdown'
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Daftar karakter Agent dalam game Valorant:');
for (const agent in agents) {
  console.log(agent);
}
rl.question('Pilih agen dari daftar di atas: ', (selectedAgent) => {
  const agentInfo = agents[selectedAgent];
  if (agentInfo) {
    console.log(`Informasi tentang agen ${selectedAgent}:`);
    console.log(`Role: ${agentInfo.Role}`);
    console.log(`Ability: ${agentInfo.Ability}`);
  } else {
    console.log('Agen yang Anda pilih tidak ditemukan.');
  }

  rl.close();
});
