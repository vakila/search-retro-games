export const CONSOLE_IDS = ["gb","gba","gbc","gg","md","ms","n64","nes","pce","ps1","sat","sega32","snes","vb"];
export const GENRES = ["Adventure","Arcade","Card & Board Game","Fighting","Hack and slash/Beat 'em up","Indie","Music","Pinball","Platform","Point-and-click","Puzzle","Quiz/Trivia","Racing","Real Time Strategy (RTS)","Role-playing (RPG)","Shooter","Simulator","Sport","Strategy","Tactical","Turn-based strategy (TBS)","Visual Novel"];


export const CONSOLES = [
    {
      name: 'NES',
      linkRandom: '/nes/random',
      id: "nes",
      linkAll: '/nes/all',
    },
    {
      name: 'Super Nintendo',
      linkRandom: '/snes/random',
      id: "snes",
      linkAll: '/snes/all',
    },
    {
      name: 'Nintendo 64',
      linkRandom: '/n64/random',
      id: "n64",
      linkAll: '/n64/all',
    },
    {
      name: 'Game Boy',
      linkRandom: '/gb/random',
      id: "gb",
      linkAll: '/gb/all',
    },
    {
      name: 'Game Boy Color',
      linkRandom: '/gbc/random',
      id: "gbc",
      linkAll: '/gbc/all',
    },
    {
  
      name: 'Game Boy Advance',
      linkRandom: '/gba/random',
      id: "gba",
      linkAll: '/gba/all',
    },
    {
      name: 'Sega Genesis/Megadrive',
      linkRandom: '/md/random',
      id: "md",
      linkAll: '/md/all',
    },
    {
      name: 'Sega Master System',
      linkRandom: '/ms/random',
      id: "ms",
      linkAll: '/ms/all',
    },
    {
      name: 'Game Gear',
      id: "gg",
      linkRandom: '/gg/random',
      linkAll: '/gg/all',
    },
    {
      name: 'TurboGrafx-16',
      id: "pce",
      linkRandom: '/pce/random',
      linkAll: '/pce/all',
    },
    {
      name: 'Playstation 1',
      id: "ps1",
      linkRandom: '/ps1/random',
      linkAll: '/ps1/all',
    },
    {
      name: '32X',
      id: "sega32",
      linkRandom: '/sega32/random',
      linkAll: '/sega32/all',
    },
    {
      name: 'Virtual Boy',
      id: "vb",
      linkRandom: '/vb/random',
      linkAll: '/vb/all',
    },
    {
      name: 'Sega Saturn',
      id: "sat",
      linkRandom: '/sat/random',
      linkAll: '/sat/all',
    },
  ];
  
  export function getConsoleName(id: string) {
    return CONSOLES.filter(c => c.id === id)[0].name;
  }