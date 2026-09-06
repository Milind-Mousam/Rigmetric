/* =========================================================
   RIGMETRIC
   PC GAME PERFORMANCE CHECKER
   =========================================================

   Architecture:
   1. Game performance profiles
   2. GPU performance profiles
   3. CPU performance profiles
   4. Searchable selectors
   5. FPS estimation engine
   6. Benchmark-ready database
   7. Result rendering
   8. Hardware warnings

   IMPORTANT:
   The GPU/CPU scores and game profiles are estimation
   profiles. They are NOT claimed benchmark measurements.

   Real benchmark records can be added later through the
   "benchmarks" database.
========================================================= */


/* =========================================================
   GAME DATABASE
========================================================= */

const games = {

  "GTA V": {
    baseGpu: 35,
    baseCpu: 35,
    baseRam: 8,
    fps720: 55,
    fps1080: 42,
    preset: "High",
    upscaling: "Optional"
  },

  "Red Dead Redemption 2": {
    baseGpu: 55,
    baseCpu: 50,
    baseRam: 12,
    fps720: 40,
    fps1080: 28,
    preset: "Low / Medium",
    upscaling: "FSR Recommended"
  },

  "Forza Horizon 4": {
    baseGpu: 38,
    baseCpu: 35,
    baseRam: 8,
    fps720: 60,
    fps1080: 45,
    preset: "Medium / High",
    upscaling: "Optional"
  },

  "Forza Horizon 5": {
    baseGpu: 48,
    baseCpu: 40,
    baseRam: 8,
    fps720: 48,
    fps1080: 34,
    preset: "Low / Medium",
    upscaling: "FSR Recommended"
  },

  "Far Cry 5": {
    baseGpu: 42,
    baseCpu: 40,
    baseRam: 8,
    fps720: 50,
    fps1080: 36,
    preset: "Medium",
    upscaling: "Optional"
  },

  "Far Cry 6": {
    baseGpu: 55,
    baseCpu: 48,
    baseRam: 12,
    fps720: 44,
    fps1080: 32,
    preset: "Low / Medium",
    upscaling: "FSR Recommended"
  },

  "Assassin's Creed Unity": {
    baseGpu: 46,
    baseCpu: 48,
    baseRam: 8,
    fps720: 45,
    fps1080: 32,
    preset: "Low / Medium",
    upscaling: "If Available"
  },

  "Assassin's Creed Origins": {
    baseGpu: 50,
    baseCpu: 48,
    baseRam: 8,
    fps720: 44,
    fps1080: 32,
    preset: "Low / Medium",
    upscaling: "Optional"
  },

  "Assassin's Creed Odyssey": {
    baseGpu: 54,
    baseCpu: 52,
    baseRam: 8,
    fps720: 42,
    fps1080: 30,
    preset: "Low / Medium",
    upscaling: "Optional"
  },

  "Assassin's Creed Valhalla": {
    baseGpu: 58,
    baseCpu: 52,
    baseRam: 8,
    fps720: 40,
    fps1080: 29,
    preset: "Low / Medium",
    upscaling: "FSR Recommended"
  },

  "Assassin's Creed Mirage": {
    baseGpu: 55,
    baseCpu: 48,
    baseRam: 8,
    fps720: 48,
    fps1080: 34,
    preset: "Low / Medium",
    upscaling: "FSR Recommended"
  },

  "Assassin's Creed Shadows": {
    baseGpu: 70,
    baseCpu: 58,
    baseRam: 16,
    fps720: 32,
    fps1080: 22,
    preset: "Low",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Elden Ring": {
    baseGpu: 48,
    baseCpu: 45,
    baseRam: 12,
    fps720: 48,
    fps1080: 38,
    preset: "Low / Medium",
    upscaling: "Optional"
  },

  "Cyberpunk 2077": {
    baseGpu: 60,
    baseCpu: 50,
    baseRam: 16,
    fps720: 38,
    fps1080: 25,
    preset: "Low",
    upscaling: "FSR / XeSS Recommended"
  },

  "Cyberpunk 2077: Phantom Liberty": {
    baseGpu: 68,
    baseCpu: 55,
    baseRam: 16,
    fps720: 34,
    fps1080: 23,
    preset: "Low",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "VALORANT": {
    baseGpu: 15,
    baseCpu: 25,
    baseRam: 8,
    fps720: 140,
    fps1080: 110,
    preset: "Low",
    upscaling: "Not Needed"
  },

  "Counter-Strike 2": {
    baseGpu: 30,
    baseCpu: 45,
    baseRam: 8,
    fps720: 120,
    fps1080: 85,
    preset: "Low / Medium",
    upscaling: "Optional"
  },

  "PUBG: BATTLEGROUNDS": {
    baseGpu: 40,
    baseCpu: 45,
    baseRam: 8,
    fps720: 75,
    fps1080: 55,
    preset: "Low / Medium",
    upscaling: "FSR Recommended"
  },

  "Apex Legends": {
    baseGpu: 38,
    baseCpu: 42,
    baseRam: 8,
    fps720: 85,
    fps1080: 65,
    preset: "Low / Medium",
    upscaling: "FSR Optional"
  },

  "Overwatch 2": {
    baseGpu: 32,
    baseCpu: 38,
    baseRam: 8,
    fps720: 100,
    fps1080: 80,
    preset: "Low / Medium",
    upscaling: "Not Needed"
  },

  "Rainbow Six Siege": {
    baseGpu: 35,
    baseCpu: 40,
    baseRam: 8,
    fps720: 110,
    fps1080: 80,
    preset: "Low / Medium",
    upscaling: "Optional"
  },

  "Marvel Rivals": {
    baseGpu: 55,
    baseCpu: 50,
    baseRam: 16,
    fps720: 45,
    fps1080: 32,
    preset: "Low",
    upscaling: "FSR / XeSS Recommended"
  },

  "Call of Duty: Warzone": {
    baseGpu: 55,
    baseCpu: 50,
    baseRam: 16,
    fps720: 50,
    fps1080: 35,
    preset: "Low",
    upscaling: "FSR / DLSS Recommended"
  },

  "Rocket League": {
    baseGpu: 25,
    baseCpu: 30,
    baseRam: 8,
    fps720: 150,
    fps1080: 120,
    preset: "High",
    upscaling: "Not Needed"
  },

  "Fortnite": {
    baseGpu: 40,
    baseCpu: 40,
    baseRam: 8,
    fps720: 100,
    fps1080: 70,
    preset: "Performance / Low",
    upscaling: "Optional"
  },

  "Minecraft Java": {
    baseGpu: 18,
    baseCpu: 30,
    baseRam: 8,
    fps720: 120,
    fps1080: 90,
    preset: "Medium",
    upscaling: "Not Needed"
  },

  "Minecraft Bedrock": {
    baseGpu: 15,
    baseCpu: 25,
    baseRam: 8,
    fps720: 144,
    fps1080: 120,
    preset: "High",
    upscaling: "Not Needed"
  },

  "God of War": {
    baseGpu: 52,
    baseCpu: 48,
    baseRam: 16,
    fps720: 40,
    fps1080: 28,
    preset: "Low",
    upscaling: "FSR Recommended"
  },

  "God of War Ragnarök": {
    baseGpu: 60,
    baseCpu: 52,
    baseRam: 16,
    fps720: 38,
    fps1080: 27,
    preset: "Low / Medium",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Hogwarts Legacy": {
    baseGpu: 58,
    baseCpu: 50,
    baseRam: 16,
    fps720: 38,
    fps1080: 27,
    preset: "Low",
    upscaling: "FSR / XeSS Recommended"
  },

  "Baldur's Gate 3": {
    baseGpu: 48,
    baseCpu: 48,
    baseRam: 16,
    fps720: 50,
    fps1080: 38,
    preset: "Low / Medium",
    upscaling: "FSR Recommended"
  },

  "Helldivers 2": {
    baseGpu: 60,
    baseCpu: 55,
    baseRam: 16,
    fps720: 38,
    fps1080: 27,
    preset: "Low",
    upscaling: "FSR Recommended"
  },

  "Black Myth: Wukong": {
    baseGpu: 68,
    baseCpu: 55,
    baseRam: 16,
    fps720: 32,
    fps1080: 22,
    preset: "Low",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Monster Hunter Wilds": {
    baseGpu: 72,
    baseCpu: 58,
    baseRam: 16,
    fps720: 30,
    fps1080: 20,
    preset: "Low",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Kingdom Come: Deliverance II": {
    baseGpu: 68,
    baseCpu: 58,
    baseRam: 16,
    fps720: 34,
    fps1080: 24,
    preset: "Low",
    upscaling: "FSR / DLSS Recommended"
  },

  "Starfield": {
    baseGpu: 65,
    baseCpu: 55,
    baseRam: 16,
    fps720: 35,
    fps1080: 25,
    preset: "Low",
    upscaling: "FSR Recommended"
  },

  "The Last of Us Part I": {
    baseGpu: 65,
    baseCpu: 55,
    baseRam: 16,
    fps720: 34,
    fps1080: 24,
    preset: "Low",
    upscaling: "FSR Recommended"
  },

  "Dragon's Dogma 2": {
    baseGpu: 72,
    baseCpu: 65,
    baseRam: 16,
    fps720: 30,
    fps1080: 22,
    preset: "Low",
    upscaling: "FSR / DLSS Recommended"
  },

  "Alan Wake 2": {
    baseGpu: 75,
    baseCpu: 55,
    baseRam: 16,
    fps720: 28,
    fps1080: 20,
    preset: "Low",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Silent Hill 2": {
    baseGpu: 68,
    baseCpu: 55,
    baseRam: 16,
    fps720: 32,
    fps1080: 23,
    preset: "Low",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "DOOM: The Dark Ages": {
    baseGpu: 72,
    baseCpu: 55,
    baseRam: 16,
    fps720: 35,
    fps1080: 25,
    preset: "Low",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Clair Obscur: Expedition 33": {
    baseGpu: 60,
    baseCpu: 50,
    baseRam: 16,
    fps720: 40,
    fps1080: 28,
    preset: "Low / Medium",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Battlefield 6": {
    baseGpu: 60,
    baseCpu: 55,
    baseRam: 16,
    fps720: 45,
    fps1080: 32,
    preset: "Low",
    upscaling: "FSR / DLSS Recommended"
  },

  "Battlefield 2042": {
    baseGpu: 55,
    baseCpu: 52,
    baseRam: 16,
    fps720: 55,
    fps1080: 38,
    preset: "Low",
    upscaling: "FSR Recommended"
  },

  "Battlefield V": {
    baseGpu: 42,
    baseCpu: 42,
    baseRam: 8,
    fps720: 80,
    fps1080: 58,
    preset: "Medium",
    upscaling: "Optional"
  },

  "Battlefield 1": {
    baseGpu: 35,
    baseCpu: 38,
    baseRam: 8,
    fps720: 95,
    fps1080: 70,
    preset: "High",
    upscaling: "Not Needed"
  },

  "Grand Theft Auto IV": {
    baseGpu: 25,
    baseCpu: 35,
    baseRam: 8,
    fps720: 70,
    fps1080: 52,
    preset: "Medium",
    upscaling: "Not Needed"
  },

  "Grand Theft Auto: San Andreas": {
    baseGpu: 8,
    baseCpu: 15,
    baseRam: 4,
    fps720: 200,
    fps1080: 180,
    preset: "High",
    upscaling: "Not Needed"
  },

  "The Witcher 3": {
    baseGpu: 48,
    baseCpu: 45,
    baseRam: 8,
    fps720: 55,
    fps1080: 40,
    preset: "Medium",
    upscaling: "Optional"
  },

  "The Witcher 3: Next-Gen": {
    baseGpu: 62,
    baseCpu: 50,
    baseRam: 16,
    fps720: 38,
    fps1080: 27,
    preset: "Low",
    upscaling: "FSR / DLSS Recommended"
  },

  "Dying Light 2": {
    baseGpu: 58,
    baseCpu: 48,
    baseRam: 16,
    fps720: 42,
    fps1080: 30,
    preset: "Low",
    upscaling: "FSR Recommended"
  },

  "Resident Evil 4": {
    baseGpu: 52,
    baseCpu: 45,
    baseRam: 16,
    fps720: 50,
    fps1080: 36,
    preset: "Low / Medium",
    upscaling: "FSR / XeSS Recommended"
  },

  "Resident Evil Village": {
    baseGpu: 42,
    baseCpu: 40,
    baseRam: 8,
    fps720: 65,
    fps1080: 48,
    preset: "Medium",
    upscaling: "Optional"
  },

  "Horizon Zero Dawn": {
    baseGpu: 48,
    baseCpu: 45,
    baseRam: 16,
    fps720: 50,
    fps1080: 36,
    preset: "Medium",
    upscaling: "FSR Recommended"
  },

  "Horizon Forbidden West": {
    baseGpu: 62,
    baseCpu: 52,
    baseRam: 16,
    fps720: 38,
    fps1080: 27,
    preset: "Low",
    upscaling: "FSR / DLSS Recommended"
  },

  "Death Stranding": {
    baseGpu: 42,
    baseCpu: 40,
    baseRam: 8,
    fps720: 65,
    fps1080: 48,
    preset: "Medium",
    upscaling: "FSR Recommended"
  },

  "Death Stranding 2": {
    baseGpu: 68,
    baseCpu: 55,
    baseRam: 16,
    fps720: 34,
    fps1080: 24,
    preset: "Low",
    upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Palworld": {
    baseGpu: 50,
    baseCpu: 48,
    baseRam: 16,
    fps720: 45,
    fps1080: 32,
    preset: "Low / Medium",
    upscaling: "FSR Recommended"
  },

  "Rust": {
    baseGpu: 55,
    baseCpu: 55,
    baseRam: 16,
    fps720: 45,
    fps1080: 32,
    preset: "Low / Medium",
    upscaling: "Optional"
  },

  "ARK: Survival Evolved": {
    baseGpu: 55,
    baseCpu: 50,
    baseRam: 16,
    fps720: 40,
    fps1080: 28,
    preset: "Low",
    upscaling: "FSR Recommended"
  },

  "ARK: Survival Ascended": {
    baseGpu: 78,
    baseCpu: 62,
    baseRam: 32,
    fps720: 25,
    fps1080: 18,
    preset: "Lowest",
    upscaling: "FSR / DLSS Recommended"
  },

  "Sea of Thieves": {
    baseGpu: 38,
    baseCpu: 38,
    baseRam: 8,
    fps720: 85,
    fps1080: 60,
    preset: "Medium / High",
    upscaling: "Optional"
  },

  "Fallout 4": {
    baseGpu: 28,
    baseCpu: 35,
    baseRam: 8,
    fps720: 90,
    fps1080: 65,
    preset: "High",
    upscaling: "Not Needed"
  },

  "Fallout 76": {
    baseGpu: 40,
    baseCpu: 42,
    baseRam: 8,
    fps720: 65,
    fps1080: 48,
    preset: "Medium",
    upscaling: "Optional"
  },

  "Destiny 2": {
    baseGpu: 42,
    baseCpu: 45,
    baseRam: 8,
    fps720: 90,
    fps1080: 65,
    preset: "Medium / High",
    upscaling: "Optional"
  },

  "The Finals": {
    baseGpu: 50,
    baseCpu: 50,
    baseRam: 16,
    fps720: 70,
    fps1080: 50,
    preset: "Low / Medium",
    upscaling: "FSR Recommended"
  },

  "Escape from Tarkov": {
    baseGpu: 50,
    baseCpu: 60,
    baseRam: 16,
    fps720: 65,
    fps1080: 48,
    preset: "Low / Medium",
    upscaling: "Optional"
  },

  "Euro Truck Simulator 2": {
    baseGpu: 20,
    baseCpu: 30,
    baseRam: 8,
    fps720: 100,
    fps1080: 80,
    preset: "High",
    upscaling: "Not Needed"
  },

  "BeamNG.drive": {
    baseGpu: 38,
    baseCpu: 55,
    baseRam: 16,
    fps720: 70,
    fps1080: 52,
    preset: "Low / Medium",
    upscaling: "Optional"
  },

  "Microsoft Flight Simulator": {
    baseGpu: 58,
    baseCpu: 65,
    baseRam: 16,
    fps720: 42,
    fps1080: 30,
    preset: "Low / Medium",
    upscaling: "FSR / DLSS Recommended"
  },

  "Cities: Skylines II": {
    baseGpu: 70,
    baseCpu: 65,
    baseRam: 16,
    fps720: 32,
    fps1080: 23,
    preset: "Low",
    upscaling: "FSR / DLSS Recommended"
  }

};


/* =========================================================
   GPU DATABASE
   Score = relative estimation profile.
========================================================= */

const gpus = {

  "AMD Vega 3": 12,
  "AMD Vega 6": 16,
  "AMD Vega 7": 18,
  "AMD Vega 8": 20,

  "Intel UHD 610": 8,
  "Intel UHD 620": 12,
  "Intel UHD 630": 15,
  "Intel UHD 730": 17,
  "Intel UHD 770": 22,

  "Intel Iris Xe": 20,
  "Intel Arc A310": 28,
  "Intel Arc A380": 35,
  "Intel Arc A580": 55,
  "Intel Arc A750": 62,
  "Intel Arc A770": 70,

  "NVIDIA GT 710": 5,
  "NVIDIA GT 1030": 22,
  "NVIDIA GTX 750 Ti": 26,
  "NVIDIA GTX 950": 28,
  "NVIDIA GTX 960": 30,
  "NVIDIA GTX 970": 34,
  "NVIDIA GTX 980": 38,
  "NVIDIA GTX 980 Ti": 43,

  "NVIDIA GTX 1050": 32,
  "NVIDIA GTX 1050 Ti": 38,
  "NVIDIA GTX 1060": 42,
  "NVIDIA GTX 1070": 50,
  "NVIDIA GTX 1080": 56,
  "NVIDIA GTX 1080 Ti": 64,

  "NVIDIA GTX 1650": 45,
  "NVIDIA GTX 1650 SUPER": 50,
  "NVIDIA GTX 1660": 55,
  "NVIDIA GTX 1660 SUPER": 60,
  "NVIDIA GTX 1660 Ti": 62,

  "NVIDIA RTX 2060": 65,
  "NVIDIA RTX 2060 SUPER": 70,
  "NVIDIA RTX 2070": 74,
  "NVIDIA RTX 2070 SUPER": 80,
  "NVIDIA RTX 2080": 84,
  "NVIDIA RTX 2080 SUPER": 90,
  "NVIDIA RTX 2080 Ti": 98,

  "NVIDIA RTX 3050": 52,
  "NVIDIA RTX 3060": 78,
  "NVIDIA RTX 3060 Ti": 88,
  "NVIDIA RTX 3070": 96,
  "NVIDIA RTX 3070 Ti": 102,
  "NVIDIA RTX 3080": 112,
  "NVIDIA RTX 3080 Ti": 122,
  "NVIDIA RTX 3090": 128,
  "NVIDIA RTX 3090 Ti": 134,

  "NVIDIA RTX 4060": 92,
  "NVIDIA RTX 4060 Ti": 102,
  "NVIDIA RTX 4070": 118,
  "NVIDIA RTX 4070 SUPER": 128,
  "NVIDIA RTX 4070 Ti": 132,
  "NVIDIA RTX 4070 Ti SUPER": 138,
  "NVIDIA RTX 4080": 155,
  "NVIDIA RTX 4080 SUPER": 160,
  "NVIDIA RTX 4090": 175,

  "NVIDIA RTX 5060": 105,
  "NVIDIA RTX 5060 Ti": 115,
  "NVIDIA RTX 5070": 135,
  "NVIDIA RTX 5070 Ti": 150,
  "NVIDIA RTX 5080": 170,
  "NVIDIA RTX 5090": 195,

  "AMD RX 550": 18,
  "AMD RX 560": 24,
  "AMD RX 570": 32,
  "AMD RX 580": 38,
  "AMD RX 590": 42,

  "AMD RX 5500 XT": 42,
  "AMD RX 5600 XT": 55,
  "AMD RX 5700": 62,
  "AMD RX 5700 XT": 68,

  "AMD RX 6500 XT": 40,
  "AMD RX 6600": 70,
  "AMD RX 6600 XT": 76,
  "AMD RX 6650 XT": 80,
  "AMD RX 6700": 78,
  "AMD RX 6700 XT": 82,
  "AMD RX 6750 XT": 88,
  "AMD RX 6800": 95,
  "AMD RX 6800 XT": 105,
  "AMD RX 6900 XT": 118,

  "AMD RX 7600": 85,
  "AMD RX 7600 XT": 92,
  "AMD RX 7700 XT": 100,
  "AMD RX 7800 XT": 112,
  "AMD RX 7900 GRE": 120,
  "AMD RX 7900 XT": 135,
  "AMD RX 7900 XTX": 150,

  "AMD RX 9060 XT": 110,
  "AMD RX 9070": 145,
  "AMD RX 9070 XT": 155

};


/* =========================================================
   CPU DATABASE
   Score = relative estimation profile.
========================================================= */

const cpus = {

  "AMD Athlon / entry-level": 18,
  "AMD Ryzen 3 3250U": 22,
  "AMD Ryzen 3 3200G": 25,
  "AMD Ryzen 3 4100": 32,
  "AMD Ryzen 3 3100 / similar": 40,

  "AMD Ryzen 5 2600 / similar": 42,
  "AMD Ryzen 5 3600 / similar": 52,
  "AMD Ryzen 5 4500 / similar": 48,
  "AMD Ryzen 5 5500 / similar": 54,
  "AMD Ryzen 5 5600 / similar": 58,
  "AMD Ryzen 5 5600X / similar": 62,
  "AMD Ryzen 5 7600 / similar": 72,
  "AMD Ryzen 5 7600X / similar": 76,
  "AMD Ryzen 5 9600X / similar": 78,

  "AMD Ryzen 7 2700X / similar": 48,
  "AMD Ryzen 7 3700X / similar": 58,
  "AMD Ryzen 7 5700X / similar": 65,
  "AMD Ryzen 7 5800X / similar": 70,
  "AMD Ryzen 7 5800X3D / similar": 75,
  "AMD Ryzen 7 7700 / similar": 78,
  "AMD Ryzen 7 7800X3D / similar": 85,
  "AMD Ryzen 7 9700X / similar": 88,
  "AMD Ryzen 7 9800X3D": 95,

  "AMD Ryzen 9 3900X / similar": 65,
  "AMD Ryzen 9 5900X / similar": 72,
  "AMD Ryzen 9 5950X / similar": 78,
  "AMD Ryzen 9 7900X / similar": 86,
  "AMD Ryzen 9 7950X / similar": 92,
  "AMD Ryzen 9 9950X / similar": 98,

  "Intel Celeron / Pentium (older)": 20,
  "Intel Core i3 (older)": 22,
  "Intel Core i5 (older)": 38,
  "Intel Core i7 (older)": 45,

  "Intel Core i3-10100 / similar": 40,
  "Intel Core i5-10400 / similar": 50,
  "Intel Core i7-10700 / similar": 58,

  "Intel Core i3-12100 / similar": 50,
  "Intel Core i5-12400 / similar": 62,
  "Intel Core i5-12600K / similar": 68,
  "Intel Core i7-12700K / similar": 78,
  "Intel Core i9-12900KS": 90,

  "Intel Core i5-13400 / similar": 68,
  "Intel Core i5-13600K / similar": 78,
  "Intel Core i7-13700K / similar": 88,
  "Intel Core i9-13900K / similar": 95,

  "Intel Core i5-14400 / similar": 72,
  "Intel Core i5-14600K / similar": 82,
  "Intel Core i7-14700K": 92,
  "Intel Core i9-14900K": 98,

  "Intel Core Ultra 5 / modern": 75,
  "Intel Core Ultra 7 / modern": 88,
  "Intel Core Ultra 9 / modern": 98,

  "Intel Core Ultra 5 200-series / similar": 78,
  "Intel Core Ultra 7 200-series / similar": 90,
  "Intel Core Ultra 9 200-series / similar": 100

};


/* =========================================================
   RAM OPTIONS
========================================================= */

const ramOptions = [4, 8, 12, 16, 32];


/* =========================================================
   BENCHMARK DATABASE
=========================================================

   Real benchmark records can be added here later.

   Example:

   {
     game: "Cyberpunk 2077",
     gpu: "NVIDIA RTX 3060",
     cpu: "AMD Ryzen 5 5600 / similar",
     resolution: "1080p",
     preset: "Low",
     upscaling: "Off",
     averageFPS: 72,
     onePercentLow: 58,
     source: "Source name",
     sourceType: "benchmark"
   }

========================================================= */

const benchmarks = [];


/* =========================================================
   BENCHMARK LOOKUP
========================================================= */

function findBenchmark(game, gpu, cpu, resolution) {

  return benchmarks.find(benchmark =>
    benchmark.game === game &&
    benchmark.gpu === gpu &&
    benchmark.cpu === cpu &&
    benchmark.resolution === resolution
  );

}

/* =========================================================
   DOM ELEMENTS
========================================================= */

const gpuSearch = document.getElementById("gpuSearch");
const gpuResults = document.getElementById("gpuResults");

const cpuSearch = document.getElementById("cpuSearch");
const cpuResults = document.getElementById("cpuResults");

const gameSearch = document.getElementById("gameSearch");
const gameResults = document.getElementById("gameResults");

const ramSelect = document.getElementById("ram");
const resolutionSelect = document.getElementById("resolution");

const checkButton = document.getElementById("checkBtn");

const result = document.getElementById("result");

const resultGame = document.getElementById("resultGame");
const status = document.getElementById("status");
const resultResolution = document.getElementById("resultResolution");

const fps = document.getElementById("fps");
const preset = document.getElementById("preset");
const upscaling = document.getElementById("upscaling");
const limitation = document.getElementById("limitation");
const ramCheck = document.getElementById("ramCheck");

const resultGpu = document.getElementById("resultGpu");
const resultCpu = document.getElementById("resultCpu");

const explanationText =
  document.getElementById("explanationText");

const resultSource =
  document.getElementById("resultSource");

const hardwareWarnings =
  document.getElementById("hardwareWarnings");

const hardwareWarningsList =
  document.getElementById("hardwareWarningsList");


/* =========================================================
   SELECTED VALUES
========================================================= */

let selectedGpu = null;
let selectedCpu = null;
let selectedGame = null;


/* =========================================================
   SEARCH SYSTEM
========================================================= */

function setupSearch(
  input,
  resultsBox,
  items,
  onSelect
) {

  if (!input || !resultsBox) {
    return;
  }

  function showResults(query = "") {

    const searchTerm =
      query.toLowerCase().trim();

    const matches =
      Object.keys(items).filter(item =>
        item.toLowerCase().includes(searchTerm)
      );

    resultsBox.innerHTML = "";

    if (matches.length === 0) {

      resultsBox.style.display = "none";

      return;
    }

    matches
      .slice(0, 10)
      .forEach(item => {

        const resultItem =
          document.createElement("div");

        resultItem.className =
          "search-result-item";

        resultItem.textContent = item;

        resultItem.addEventListener(
          "mousedown",
          event => {

            event.preventDefault();

            input.value = item;

            onSelect(item);

            resultsBox.style.display =
              "none";
          }
        );

        resultsBox.appendChild(resultItem);

      });

    resultsBox.style.display = "block";
  }


  input.addEventListener(
    "input",
    () => {

      onSelect(null);

      showResults(input.value);

    }
  );


  input.addEventListener(
    "focus",
    () => {

      showResults(input.value);

    }
  );


  input.addEventListener(
    "blur",
    () => {

      setTimeout(
        () => {

          resultsBox.style.display =
            "none";

        },
        200
      );

    }
  );

}

=========================================================
   SEARCH SETUP
========================================================= */

setupSearch(
  gpuSearch,
  gpuResults,
  gpus,
  value => {

    selectedGpu = value;

  }
);


setupSearch(
  cpuSearch,
  cpuResults,
  cpus,
  value => {

    selectedCpu = value;

  }
);


setupSearch(
  gameSearch,
  gameResults,
  games,
  value => {

    selectedGame = value;

  }
);


/* =========================================================
   GPU TYPE DETECTION
========================================================= */

function gpuNameIsIntegrated(gpuName) {

  if (!gpuName) {
    return false;
  }

  return (
    gpuName.includes("Vega") ||
    gpuName.includes("UHD") ||
    gpuName.includes("Iris")
  );

}


/* =========================================================
   GAME CATEGORY DETECTION
========================================================= */

const cpuSensitiveGames = [

  "VALORANT",
  "Counter-Strike 2",
  "PUBG: BATTLEGROUNDS",
  "Apex Legends",
  "Overwatch 2",
  "Rainbow Six Siege",
  "Rocket League",
  "Rust",
  "Escape from Tarkov",
  "BeamNG.drive",
  "Microsoft Flight Simulator",
  "Cities: Skylines II"

];


const gpuHeavyGames = [

  "Cyberpunk 2077",
  "Cyberpunk 2077: Phantom Liberty",
  "Hogwarts Legacy",
  "Black Myth: Wukong",
  "Monster Hunter Wilds",
  "Alan Wake 2",
  "Silent Hill 2",
  "DOOM: The Dark Ages",
  "God of War",
  "God of War Ragnarök",
  "Horizon Forbidden West",
  "Death Stranding 2",
  "ARK: Survival Ascended",
  "Assassin's Creed Shadows"

];


/* =========================================================
   FPS CALCULATION ENGINE
========================================================= */

function calculateFPS(
  game,
  gameName,
  gpuName,
  gpuScore,
  cpuScore,
  ram,
  resolution
) {

  const gpuRatio =
    gpuScore / game.baseGpu;

  const cpuRatio =
    cpuScore / game.baseCpu;


  let gpuWeight = 0.65;
  let cpuWeight = 0.35;


  if (cpuSensitiveGames.includes(gameName)) {

    gpuWeight = 0.45;
    cpuWeight = 0.55;

  }


  if (gpuHeavyGames.includes(gameName)) {

    gpuWeight = 0.75;
    cpuWeight = 0.25;

  }


  let multiplier =
    (gpuRatio * gpuWeight) +
    (cpuRatio * cpuWeight);


  multiplier = Math.max(
    0.28,
    Math.min(multiplier, 1.45)
  );


  let estimatedFPS =
    resolution === "720p"
      ? game.fps720 * multiplier
      : game.fps1080 * multiplier;


  /* RAM penalty */

  if (ram < game.baseRam) {

    const ramDeficit =
      game.baseRam - ram;

    if (ramDeficit >= 8) {

      estimatedFPS *= 0.72;

    } else {

      estimatedFPS *= 0.84;

    }

  } else if (
    ram >= game.baseRam + 8
  ) {

    estimatedFPS *= 1.03;

  }


  /* Integrated GPU penalty */

  const integratedGPU =
    gpuNameIsIntegrated(gpuName);


  if (
    integratedGPU &&
    ram <= 8
  ) {

    estimatedFPS *= 0.90;

  }


  /* Very weak integrated memory configuration */

  if (
    integratedGPU &&
    ram <= 4
  ) {

    estimatedFPS *= 0.82;

  }


  return Math.max(
    5,
    estimatedFPS
  );

}


/* =========================================================
   STATUS
========================================================= */

function getStatus(estimatedFPS) {

  if (estimatedFPS >= 30) {

    return "PLAYABLE";

  }

  if (estimatedFPS >= 20) {

    return "BORDERLINE";

  }

  return "NOT RECOMMENDED";

}


/* =========================================================
   PRESET
========================================================= */

function getPreset(
  game,
  estimatedFPS
) {

  if (estimatedFPS < 20) {

    return "Very Low / Lowest";

  }

  if (estimatedFPS < 30) {

    return "Low";

  }

  return game.preset;

}


/* =========================================================
   LIMITATION
========================================================= */

function getLimitation(
  game,
  gpuScore,
  cpuScore,
  ram
) {

  const gpuRatio =
    gpuScore / game.baseGpu;

  const cpuRatio =
    cpuScore / game.baseCpu;


  if (ram < game.baseRam) {

    return "RAM";

  }


  if (
    cpuRatio <
    gpuRatio * 0.9
  ) {

    return "CPU";

  }


  return "GPU";

}


/* =========================================================
   FPS RANGE
========================================================= */

function createFPSRange(
  averageFPS
) {

  const low =
    Math.max(
      1,
      Math.round(
        averageFPS * 0.90
      )
    );

  const high =
    Math.round(
      averageFPS * 1.10
    );

  return {
    low,
    high
  };

}

/* =========================================================
   HARDWARE WARNINGS
========================================================= */

function buildHardwareWarnings(
  game,
  gpuName,
  gpuScore,
  cpuName,
  cpuScore,
  ram
) {

  const warnings = [];


  if (ram < game.baseRam) {

    warnings.push(
      `This game targets ${game.baseRam} GB of RAM. Your system has ${ram} GB, which may cause stuttering or slowdowns.`
    );

  }


  if (
    gpuNameIsIntegrated(gpuName)
  ) {

    warnings.push(
      "Your selected graphics solution uses integrated/shared memory. Performance can be affected by RAM speed, memory configuration, and available system memory."
    );

  }


  if (gpuScore < game.baseGpu) {

    warnings.push(
      "Your GPU is below this game's target graphics level, so lower settings and/or upscaling may be needed for a smoother experience."
    );

  }


  if (cpuScore < game.baseCpu) {

    warnings.push(
      "Your CPU is below this game's target processor level and may limit performance in CPU-heavy areas."
    );

  }


  return warnings;

}


/* =========================================================
   RENDER HARDWARE WARNINGS
========================================================= */

function renderHardwareWarnings(
  warnings
) {

  if (
    !hardwareWarnings ||
    !hardwareWarningsList
  ) {

    return;

  }


  if (warnings.length === 0) {

    hardwareWarnings.hidden = true;

    hardwareWarningsList.innerHTML = "";

    return;

  }


  hardwareWarningsList.innerHTML =
    warnings
      .map(
        warning =>
          `<li>${warning}</li>`
      )
      .join("");


  hardwareWarnings.hidden = false;

}


/* =========================================================
   MAIN CHECKER
========================================================= */

if (checkButton) {

  checkButton.addEventListener(
    "click",
    () => {

      const gpuName =
        selectedGpu;

      const cpuName =
        selectedCpu;

      const gameName =
        selectedGame;

      const ram =
        Number(ramSelect.value);

      const resolution =
        resolutionSelect.value;


      /* Validation */

      if (
        !gpuName ||
        !cpuName ||
        !gameName
      ) {

        alert(
          "Please select a GPU, CPU, and game from the search results."
        );

        return;

      }


      const game =
        games[gameName];

      const gpuScore =
        gpus[gpuName];

      const cpuScore =
        cpus[cpuName];


      if (
        !game ||
        gpuScore === undefined ||
        cpuScore === undefined
      ) {

        alert(
          "Something went wrong with the selected hardware or game."
        );

        return;

      }


      /* Benchmark lookup */

      const benchmark =
        findBenchmark(
          gameName,
          gpuName,
          cpuName,
          resolution
        );


      let finalFPS;
      let resultSourceText;


      if (benchmark) {

        finalFPS =
          benchmark.averageFPS;

        resultSourceText =
          "✓ Benchmark-backed result";

      } else {

        finalFPS =
          calculateFPS(
            game,
            gameName,
            gpuName,
            gpuScore,
            cpuScore,
            ram,
            resolution
          );

        resultSourceText =
          "Estimated result";

      }


      /* FPS range */

      const fpsRange =
        createFPSRange(finalFPS);


      /* Status */

      const gameStatus =
        getStatus(finalFPS);


      /* Preset */

      const recommendedPreset =
        benchmark &&
        benchmark.preset
          ? benchmark.preset
          : getPreset(
              game,
              finalFPS
            );


      /* Limitation */

      const mainLimitation =
        getLimitation(
          game,
          gpuScore,
          cpuScore,
          ram
        );

    /* =========================
         RESULT TEXT
      ========================= */

      resultGame.textContent =
        gameName;


      status.textContent =
        gameStatus;


      status.className =
        "status " +
        gameStatus
          .toLowerCase()
          .replaceAll(
            " ",
            "-"
          );


      resultResolution.textContent =
        resolution === "720p"
          ? "1280 × 720"
          : "1920 × 1080";


      fps.textContent =
        `${fpsRange.low}–${fpsRange.high}`;


      if (resultSource) {

        resultSource.textContent =
          resultSourceText;

      }


      preset.textContent =
        recommendedPreset;


      upscaling.textContent =
        benchmark &&
        benchmark.upscaling
          ? benchmark.upscaling
          : game.upscaling;


      limitation.textContent =
        mainLimitation;


      ramCheck.textContent =
        ram < game.baseRam
          ? "Below target"
          : "OK";


      resultGpu.textContent =
        gpuName;


      resultCpu.textContent =
        cpuName;


      /* =========================
         HARDWARE WARNINGS
      ========================= */

      const warnings =
        buildHardwareWarnings(
          game,
          gpuName,
          gpuScore,
          cpuName,
          cpuScore,
          ram
        );


      renderHardwareWarnings(
        warnings
      );


      /* =========================
         EXPLANATION
      ========================= */

      if (
        benchmark
      ) {

        explanationText.textContent =
          `This result uses a benchmark recorded for ${gameName} on ${gpuName} with ${cpuName} at ${resolution}.`;

      } else {

        explanationText.textContent =
          `Based on your ${gpuName}, ${cpuName}, ${ram} GB RAM, and ${resolution === "720p" ? "720p" : "1080p"} resolution, RigMetric estimates around ${fpsRange.low}–${fpsRange.high} FPS. The main limitation is likely your ${mainLimitation}. Actual performance can vary depending on drivers, game updates, thermal conditions, power limits, background applications, and in-game settings.`;

      }


      /* =========================
         SHOW RESULT
      ========================= */

      result.hidden = false;


      result.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }
  );

}

/* =========================================================
   SAFETY CHECK
========================================================= */

console.log(
  `RigMetric loaded: ${Object.keys(games).length} games, ${Object.keys(gpus).length} GPUs, ${Object.keys(cpus).length} CPUs.`
);
