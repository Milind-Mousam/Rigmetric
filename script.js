  const games = {
  "GTA V": {
    baseGpu: 35, baseCpu: 35, baseRam: 8,
    fps720: 55, fps1080: 42,
    preset: "High", upscaling: "Optional"
  },

  "Red Dead Redemption 2": {
    baseGpu: 55, baseCpu: 50, baseRam: 12,
    fps720: 40, fps1080: 28,
    preset: "Low / Medium", upscaling: "FSR Recommended"
  },

  "Forza Horizon 4": {
    baseGpu: 38, baseCpu: 35, baseRam: 8,
    fps720: 60, fps1080: 45,
    preset: "Medium / High", upscaling: "Optional"
  },

  "Forza Horizon 5": {
    baseGpu: 48, baseCpu: 40, baseRam: 8,
    fps720: 48, fps1080: 34,
    preset: "Low / Medium", upscaling: "FSR Recommended"
  },

  "Far Cry 5": {
    baseGpu: 42, baseCpu: 40, baseRam: 8,
    fps720: 50, fps1080: 36,
    preset: "Medium", upscaling: "Optional"
  },

  "Assassin's Creed Unity": {
    baseGpu: 46, baseCpu: 48, baseRam: 8,
    fps720: 45, fps1080: 32,
    preset: "Low / Medium", upscaling: "If Available"
  },

  "Elden Ring": {
    baseGpu: 48, baseCpu: 45, baseRam: 12,
    fps720: 48, fps1080: 38,
    preset: "Low / Medium", upscaling: "Optional"
  },

  "Cyberpunk 2077": {
    baseGpu: 60, baseCpu: 50, baseRam: 16,
    fps720: 38, fps1080: 25,
    preset: "Low", upscaling: "FSR / XeSS Recommended"
  },

  "VALORANT": {
    baseGpu: 15, baseCpu: 25, baseRam: 8,
    fps720: 140, fps1080: 110,
    preset: "Low", upscaling: "Not Needed"
  },

  "God of War": {
    baseGpu: 52, baseCpu: 48, baseRam: 16,
    fps720: 40, fps1080: 28,
    preset: "Low", upscaling: "FSR Recommended"
  },

  "Counter-Strike 2": {
    baseGpu: 30, baseCpu: 45, baseRam: 8,
    fps720: 120, fps1080: 85,
    preset: "Low / Medium", upscaling: "FSR Optional"
  },

  "PUBG: BATTLEGROUNDS": {
    baseGpu: 40, baseCpu: 45, baseRam: 8,
    fps720: 75, fps1080: 55,
    preset: "Low / Medium", upscaling: "FSR Recommended"
  },

  "Apex Legends": {
    baseGpu: 38, baseCpu: 42, baseRam: 8,
    fps720: 85, fps1080: 65,
    preset: "Low / Medium", upscaling: "FSR Optional"
  },

  "Overwatch 2": {
    baseGpu: 32, baseCpu: 38, baseRam: 8,
    fps720: 100, fps1080: 80,
    preset: "Low / Medium", upscaling: "Not Needed"
  },

  "Rainbow Six Siege": {
    baseGpu: 35, baseCpu: 40, baseRam: 8,
    fps720: 110, fps1080: 80,
    preset: "Low / Medium", upscaling: "Optional"
  },

  "Marvel Rivals": {
    baseGpu: 55, baseCpu: 50, baseRam: 16,
    fps720: 45, fps1080: 32,
    preset: "Low", upscaling: "FSR / XeSS Recommended"
  },

  "Call of Duty: Warzone": {
    baseGpu: 55, baseCpu: 50, baseRam: 16,
    fps720: 50, fps1080: 35,
    preset: "Low", upscaling: "FSR / DLSS Recommended"
  },

  "Rocket League": {
    baseGpu: 25, baseCpu: 30, baseRam: 8,
    fps720: 150, fps1080: 120,
    preset: "High", upscaling: "Not Needed"
  },

  "Hogwarts Legacy": {
    baseGpu: 58, baseCpu: 50, baseRam: 16,
    fps720: 38, fps1080: 27,
    preset: "Low", upscaling: "FSR / XeSS Recommended"
  },

  "Baldur's Gate 3": {
    baseGpu: 48, baseCpu: 48, baseRam: 16,
    fps720: 50, fps1080: 38,
    preset: "Low / Medium", upscaling: "FSR Recommended"
  },

  "Helldivers 2": {
    baseGpu: 60, baseCpu: 55, baseRam: 16,
    fps720: 38, fps1080: 27,
    preset: "Low", upscaling: "FSR Recommended"
  },

  "Black Myth: Wukong": {
    baseGpu: 68, baseCpu: 55, baseRam: 16,
    fps720: 32, fps1080: 22,
    preset: "Low", upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Monster Hunter Wilds": {
    baseGpu: 72, baseCpu: 58, baseRam: 16,
    fps720: 30, fps1080: 20,
    preset: "Low", upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Kingdom Come: Deliverance II": {
    baseGpu: 68, baseCpu: 58, baseRam: 16,
    fps720: 34, fps1080: 24,
    preset: "Low", upscaling: "FSR / DLSS Recommended"
  },

  "Assassin's Creed Shadows": {
    baseGpu: 70, baseCpu: 58, baseRam: 16,
    fps720: 32, fps1080: 22,
    preset: "Low", upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Starfield": {
    baseGpu: 65, baseCpu: 55, baseRam: 16,
    fps720: 35, fps1080: 25,
    preset: "Low", upscaling: "FSR Recommended"
  },

  "The Last of Us Part I": {
    baseGpu: 65, baseCpu: 55, baseRam: 16,
    fps720: 34, fps1080: 24,
    preset: "Low", upscaling: "FSR Recommended"
  },

  "God of War Ragnarök": {
    baseGpu: 60, baseCpu: 52, baseRam: 16,
    fps720: 38, fps1080: 27,
    preset: "Low / Medium", upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Dragon's Dogma 2": {
    baseGpu: 72, baseCpu: 65, baseRam: 16,
    fps720: 30, fps1080: 22,
    preset: "Low", upscaling: "FSR / DLSS Recommended"
  },

  "Alan Wake 2": {
    baseGpu: 75, baseCpu: 55, baseRam: 16,
    fps720: 28, fps1080: 20,
    preset: "Low", upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Silent Hill 2": {
    baseGpu: 68, baseCpu: 55, baseRam: 16,
    fps720: 32, fps1080: 23,
    preset: "Low", upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "DOOM: The Dark Ages": {
    baseGpu: 72, baseCpu: 55, baseRam: 16,
    fps720: 35, fps1080: 25,
    preset: "Low", upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Clair Obscur: Expedition 33": {
    baseGpu: 60, baseCpu: 50, baseRam: 16,
    fps720: 40, fps1080: 28,
    preset: "Low / Medium", upscaling: "FSR / DLSS / XeSS Recommended"
  },

  "Battlefield 6": {
    baseGpu: 60, baseCpu: 55, baseRam: 16,
    fps720: 45, fps1080: 32,
    preset: "Low", upscaling: "FSR / DLSS Recommended"
  },

  "Palworld": {
    baseGpu: 50, baseCpu: 48, baseRam: 16,
    fps720: 45, fps1080: 32,
    preset: "Low / Medium", upscaling: "FSR Recommended"
  },

  "Rust": {
    baseGpu: 55, baseCpu: 55, baseRam: 16,
    fps720: 45, fps1080: 32,
    preset: "Low / Medium", upscaling: "Optional"
  }
};

const gpus = {
  "AMD Vega 3": 12,
  "AMD Vega 8": 20,
  "Intel UHD 620": 12,
  "Intel Iris Xe": 20,

  "NVIDIA GT 1030": 22,
  "NVIDIA GTX 750 Ti": 26,
  "NVIDIA GTX 960": 30,
  "NVIDIA GTX 970": 34,
  "NVIDIA GTX 1050": 32,
  "NVIDIA GTX 1050 Ti": 38,
  "NVIDIA GTX 1060": 42,
  "NVIDIA GTX 1070": 50,
  "NVIDIA GTX 1080": 56,
  "NVIDIA GTX 1080 Ti": 64,

  "NVIDIA GTX 1650": 45,
  "NVIDIA GTX 1660": 55,
  "NVIDIA GTX 1660 SUPER": 60,
  "NVIDIA GTX 1660 Ti": 62,

  "NVIDIA RTX 2060": 65,
  "NVIDIA RTX 2060 SUPER": 70,
  "NVIDIA RTX 2070": 74,
  "NVIDIA RTX 2070 SUPER": 80,

  "NVIDIA RTX 3050": 52,
  "NVIDIA RTX 3060": 78,
  "NVIDIA RTX 3060 Ti": 88,
  "NVIDIA RTX 3070": 96,
  "NVIDIA RTX 3080": 112,

  "NVIDIA RTX 4060": 92,
  "NVIDIA RTX 4060 Ti": 102,
  "NVIDIA RTX 4070": 118,
  "NVIDIA RTX 4070 SUPER": 128,
  "NVIDIA RTX 4070 Ti SUPER": 138,
  "NVIDIA RTX 4080": 155,
  "NVIDIA RTX 4090": 175,

  "NVIDIA RTX 5060": 105,
  "NVIDIA RTX 5060 Ti": 115,
  "NVIDIA RTX 5070": 135,
  "NVIDIA RTX 5070 Ti": 150,

  "AMD RX 570": 32,
  "AMD RX 580": 38,
  "AMD RX 5500 XT": 42,
  "AMD RX 5600 XT": 55,
  "AMD RX 5700 XT": 68,
  "AMD RX 6600": 70,
  "AMD RX 6700 XT": 82,
  "AMD RX 6800": 95,
  "AMD RX 7600": 85,
  "AMD RX 7700 XT": 100,
  "AMD RX 7800 XT": 112,
  "AMD RX 7900 XT": 135,
  "AMD RX 7900 XTX": 150,
  "AMD RX 9070": 145,

  "Intel Arc A380": 35,
  "Intel Arc A750": 62,
  "Intel Arc A770": 70
};

const cpus = {
  "AMD Athlon / entry-level": 18,
  "AMD Ryzen 3 3250U": 22,
  "Intel Celeron / Pentium (older)": 20,
  "Intel Core i3 (older)": 22,
  "Intel Core i5 (older)": 38,
  "Intel Core i7 (older)": 45,

  "Intel Core i3-10100 / similar": 40,
  "Intel Core i5-10400 / similar": 50,
  "Intel Core i7-10700 / similar": 58,

  "AMD Ryzen 3 3100 / similar": 40,
  "AMD Ryzen 5 3600 / similar": 52,
  "AMD Ryzen 7 3700X / similar": 58,

  "Intel Core i3-12100 / similar": 50,
  "Intel Core i5-12400 / similar": 62,
  "Intel Core i5-12600K / similar": 68,
  "Intel Core i7-12700K / similar": 78,

  "AMD Ryzen 5 5600 / similar": 58,
  "AMD Ryzen 5 7600 / similar": 72,
  "AMD Ryzen 7 5700X / similar": 65,
  "AMD Ryzen 7 5800X3D / similar": 75,
  "AMD Ryzen 7 7800X3D / similar": 85,

  "Intel Core i5-13400 / similar": 68,
  "Intel Core i5-13600K / similar": 78,
  "Intel Core i7-13700K / similar": 88,

  "AMD Ryzen 5 9600X / similar": 78,
  "AMD Ryzen 7 9700X / similar": 88,
  "AMD Ryzen 7 9800X3D / similar": 95,

  "Intel Core i5-14600K / similar": 82,
  "Intel Core i7-14700K / similar": 92,
  "Intel Core i9-14900K / similar": 98,

  "Intel Core Ultra 5 / modern": 75,
  "Intel Core Ultra 7 / modern": 88,
  "Intel Core Ultra 9 / modern": 98,

  "AMD Ryzen 5 (modern)": 55,
  "AMD Ryzen 7 (modern)": 68
};
const ramOptions = [4, 8, 12, 16, 32];

const gpuSearch = document.getElementById("gpuSearch");
const gpuResults = document.getElementById("gpuResults");

const cpuSearch = document.getElementById("cpuSearch");
const cpuResults = document.getElementById("cpuResults");

const ramSelect = document.getElementById("ram");

const gameSearch = document.getElementById("gameSearch");
const gameResults = document.getElementById("gameResults");

const resolutionSelect = document.getElementById("resolution");

// Currently selected hardware/game
let selectedGpu = null;
let selectedCpu = null;
let selectedGame = null;});

Object.keys(cpus).forEach(cpu => {
  const option = document.createElement("option");
  option.value = cpu;
  option.textContent = cpu;
  cpuSelect.appendChild(option);
});

ramOptions.forEach(ram => {
  const option = document.createElement("option");
  option.value = ram;
  option.textContent = `${ram} GB`;
  ramSelect.appendChild(option);
});

Object.keys(games).forEach(game => {
  const option = document.createElement("option");
  option.value = game;
  option.textContent = game;
  gameSelect.appendChild(option);
});
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
const explanationText = document.getElementById("explanationText");

function calculateFPS(game, gpuScore, cpuScore, ram, resolution) {
  const gpuRatio = gpuScore / game.baseGpu;
  const cpuRatio = cpuScore / game.baseCpu;

  let multiplier = Math.min(gpuRatio, cpuRatio);

  multiplier = Math.max(0.28, Math.min(multiplier, 1.45));

  let estimatedFPS =
    resolution === "720p"
      ? game.fps720 * multiplier
      : game.fps1080 * multiplier;

  if (ram < game.baseRam) {
    estimatedFPS *= 0.82;
  } else if (ram >= game.baseRam + 8) {
    estimatedFPS *= 1.03;
  }

  if (game === games["VALORANT"] && cpuScore < 35) {
    estimatedFPS *= 0.72;
  }

  return Math.max(5, estimatedFPS);
}

function getStatus(estimatedFPS) {
  if (estimatedFPS >= 60) {
    return "PLAYABLE";
  }

  if (estimatedFPS >= 30) {
    return "PLAYABLE";
  }

  if (estimatedFPS >= 20) {
    return "BORDERLINE";
  }

  return "NOT RECOMMENDED";
}

function getPreset(game, estimatedFPS) {
  if (estimatedFPS < 20) {
    return "Very Low / Lowest";
  }

  if (estimatedFPS < 30) {
    return "Low";
  }

  return game.preset;
}

function getLimitation(game, gpuScore, cpuScore, ram) {
  const gpuRatio = gpuScore / game.baseGpu;
  const cpuRatio = cpuScore / game.baseCpu;

  if (ram < game.baseRam) {
    return "RAM";
  }

  if (cpuRatio < gpuRatio * 0.9) {
    return "CPU";
  }

  return "GPU";
}

checkButton.addEventListener("click", () => {
  const gpuName = gpuSelect.value;
  const cpuName = cpuSelect.value;
  const ram = Number(ramSelect.value);
  const gameName = gameSelect.value;
  const resolution = resolutionSelect.value;

  const game = games[gameName];
  const gpuScore = gpus[gpuName];
  const cpuScore = cpus[cpuName];

  const estimatedFPS = calculateFPS(
    game,
    gpuScore,
    cpuScore,
    ram,
    resolution
  );

  const lowFPS = Math.max(1, Math.round(estimatedFPS * 0.9));
  const highFPS = Math.round(estimatedFPS * 1.1);

  const gameStatus = getStatus(estimatedFPS);
  const recommendedPreset = getPreset(game, estimatedFPS);
  const mainLimitation = getLimitation(
    game,
    gpuScore,
    cpuScore,
    ram
  );

  resultGame.textContent = gameName;

  status.textContent = gameStatus;
  status.className = "status " + gameStatus.toLowerCase().replaceAll(" ", "-");

  resultResolution.textContent =
    resolution === "720p"
      ? "1280 × 720"
      : "1920 × 1080";

  fps.textContent = `${lowFPS}–${highFPS}`;

  preset.textContent = recommendedPreset;
  upscaling.textContent = game.upscaling;
  limitation.textContent = mainLimitation;

  ramCheck.textContent =
    ram < game.baseRam
      ? "Below target"
      : "OK";

  resultGpu.textContent = gpuName;
  resultCpu.textContent = cpuName;

  explanationText.textContent =
    `Based on your ${gpuName}, ${cpuName}, ${ram} GB RAM, ` +
    `and ${resolution === "720p" ? "720p" : "1080p"} resolution, ` +
    `RigMetric estimates around ${lowFPS}–${highFPS} FPS. ` +
    `The main limitation is likely your ${mainLimitation}. ` +
    `Actual performance can vary depending on drivers, game updates, ` +
    `thermal conditions, power limits, background applications, ` +
    `and in-game settings.`;

  result.hidden = false;

  result.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
