ults(query = "") {

    const searchTerm = query.toLowerCase().trim();

    const matches = Object.keys(items).filter(item =>
      item.toLowerCase().includes(searchTerm)
    );

    resultsBox.innerHTML = "";

    if (matches.length === 0) {
      resultsBox.style.display = "none";
      return;
    }

    matches.slice(0, 8).forEach(item => {

      const resultItem = document.createElement("div");

      resultItem.className = "search-result-item";
      resultItem.textContent = item;

      resultItem.addEventListener("mousedown", event => {

        event.preventDefault();

        input.value = item;

        onSelect(item);

        resultsBox.style.display = "none";

      });

      resultsBox.appendChild(resultItem);

    });

    resultsBox.style.display = "block";

  }


  input.addEventListener("input", () => {

    onSelect(null);

    showResults(input.value);

  });


  input.addEventListener("focus", () => {

    showResults(input.value);

  });


  input.addEventListener("blur", () => {

    setTimeout(() => {

      resultsBox.style.display = "none";

    }, 200);

  });

}


// ==========================================
// GPU SEARCH
// ==========================================

setupSearch(
  gpuSearch,
  gpuResults,
  gpus,
  value => {
    selectedGpu = value;
  }
);


// ==========================================
// CPU SEARCH
// ==========================================

setupSearch(
  cpuSearch,
  cpuResults,
  cpus,
  value => {
    selectedCpu = value;
  }
);


// ==========================================
// GAME SEARCH
// ==========================================

setupSearch(
  gameSearch,
  gameResults,
  games,
  value => {
    selectedGame = value;
  }
);


// ==========================================
// FPS CALCULATION
// ==========================================

function gpuNameIsIntegrated(gpuName) {

  return (
    gpuName.includes("Vega") ||
    gpuName.includes("UHD") ||
    gpuName.includes("Iris")
  );

}

function calculateFPS(
  game,
  gpuName,
  gpuScore,
  cpuScore,
  ram,
  resolution
) {

  // Compare the selected hardware with the game's target hardware
  const gpuRatio =
    gpuScore / game.baseGpu;

  const cpuRatio =
    cpuScore / game.baseCpu;


  // Most games are primarily limited by either GPU or CPU.
  // We use a weighted combination instead of always taking
  // whichever ratio is lower.
  let gpuWeight = 0.65;
  let cpuWeight = 0.35;


  // CPU-sensitive games
  const cpuSensitiveGames = [
    "VALORANT",
    "Counter-Strike 2",
    "PUBG: BATTLEGROUNDS",
    "Apex Legends",
    "Overwatch 2",
    "Rainbow Six Siege",
    "Rocket League",
    "Rust"
  ];


  if (cpuSensitiveGames.includes(game.name)) {
    gpuWeight = 0.45;
    cpuWeight = 0.55;
  }


  // GPU-heavy games
  const gpuHeavyGames = [
    "Cyberpunk 2077",
    "Hogwarts Legacy",
    "Black Myth: Wukong",
    "Monster Hunter Wilds",
    "Alan Wake 2",
    "Silent Hill 2",
    "DOOM: The Dark Ages",
    "God of War",
    "God of War Ragnarök"
  ];


  if (gpuHeavyGames.includes(game.name)) {
    gpuWeight = 0.75;
    cpuWeight = 0.25;
  }


  // Combined hardware performance
  let multiplier =
    (gpuRatio * gpuWeight) +
    (cpuRatio * cpuWeight);


  // Prevent extreme results
  multiplier = Math.max(
    0.28,
    Math.min(multiplier, 1.45)
  );


  // Resolution scaling
  let estimatedFPS =
    resolution === "720p"
      ? game.fps720 * multiplier
      : game.fps1080 * multiplier;


  // RAM penalty
  if (ram < game.baseRam) {

    const ramDeficit =
      game.baseRam - ram;

    // Larger RAM shortages receive a stronger penalty
    if (ramDeficit >= 8) {
      estimatedFPS *= 0.72;
    } else {
      estimatedFPS *= 0.84;
    }

  }

  // Small benefit when comfortably above the game's RAM target
  else if (ram >= game.baseRam + 8) {

    estimatedFPS *= 1.03;

  }


  // Integrated graphics are especially sensitive to memory bandwidth
  const integratedGPU =
    gpuNameIsIntegrated(gpuName);


  if (integratedGPU && ram <= 8) {
    estimatedFPS *= 0.90;
  }


  return Math.max(
    5,
    estimatedFPS
  );

}


// ==========================================
// PLAYABILITY STATUS
// ==========================================

function getStatus(estimatedFPS) {

  if (estimatedFPS >= 30) {
    return "PLAYABLE";
  }

  if (estimatedFPS >= 20) {
    return "BORDERLINE";
  }

  return "NOT RECOMMENDED";

}


// ==========================================
// RECOMMENDED GRAPHICS PRESET
// ==========================================

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


// ==========================================
// MAIN PERFORMANCE LIMITATION
// ==========================================

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


  if (cpuRatio < gpuRatio * 0.9) {
    return "CPU";
  }


  return "GPU";

}


// ==========================================
// CHECK PERFORMANCE
// ==========================================

if (checkButton) {

  checkButton.addEventListener(
    "click",
    () => {

      const gpuName = selectedGpu;
      const cpuName = selectedCpu;
      const gameName = selectedGame;

      const ram =
        Number(ramSelect.value);

      const resolution =
        resolutionSelect.value;


      // Validate selections
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


      // ==========================================
      // BENCHMARK CHECK
      // ==========================================

      const benchmark =
        findBenchmark(
          gameName,
          gpuName,
          cpuName,
          resolution
        );


      // ==========================================
      // CALCULATE FINAL FPS
      // ==========================================

      let finalFPS;
      let resultSourceText;

      if (benchmark) {

        // Use the real benchmark average FPS
        finalFPS =
          benchmark.averageFPS;

        resultSourceText =
          "✓ Benchmark-backed result";

      } else {

        // Fall back to the estimation engine
        finalFPS =
          calculateFPS(
            game,
            gpuName,
            gpuScore,
            cpuScore,
            ram,
            resolution
          );

        resultSourceText =
          "Estimated result";

      }


      // ==========================================
      // FPS RANGE
      // ==========================================

      const lowFPS =
        Math.max(
          1,
          Math.round(
            finalFPS * 0.9
          )
        );


      const highFPS =
        Math.round(
          finalFPS * 1.1
        );


      // ==========================================
      // OTHER RESULTS
      // ==========================================

      const gameStatus =
        getStatus(finalFPS);


      const recommendedPreset =
        getPreset(
          game,
          finalFPS
        );


      const mainLimitation =
        getLimitation(
          game,
          gpuScore,
          cpuScore,
          ram
        );


      // ==========================================
      // GAME
      // ==========================================

      resultGame.textContent =
        gameName;


      // ==========================================
      // STATUS
      // ==========================================

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


      // ==========================================
      // RESOLUTION
      // ==========================================

      resultResolution.textContent =
        resolution === "720p"
          ? "1280 × 720"
          : "1920 × 1080";


      // ==========================================
      // FPS
      // ==========================================

      fps.textContent =
        `${lowFPS}–${highFPS}`;


      // ==========================================
      // RESULT SOURCE
      // ==========================================

      const resultSource =
        document.getElementById(
          "resultSource"
        );

      if (resultSource) {

        resultSource.textContent =
          resultSourceText;

      }


      // ==========================================
      // PRESET
      // ==========================================

      preset.textContent =
        recommendedPreset;


      // ==========================================
      // UPSCALING
      // ==========================================

      upscaling.textContent =
        benchmark &&
        benchmark.upscaling
          ? benchmark.upscaling
          : game.upscaling;


      // ==========================================
      // LIMITATION
      // ==========================================

      limitation.textContent =
        mainLimitation;


      // ==========================================
      // RAM
      // ==========================================

      ramCheck.textContent =
        ram < game.baseRam
          ? "Below target"
          : "OK";


      // ==========================================
      // HARDWARE
      // ==========================================

      resultGpu.textContent =
        gpuName;

      resultCpu.textContent =
        cpuName;


      // ==========================================
      // HARDWARE WARNINGS
      // ==========================================

      const hardwareWarnings =
        document.getElementById(
          "hardwareWarnings"
        );

      const hardwareWarningsList =
        document.getElementById(
          "hardwareWarningsList"
        );

      const warnings = [];


      // RAM warning
      if (
        ram < game.baseRam
      ) {

        warnings.push(
          `This game targets ${game.baseRam} GB of RAM. Your system has ${ram} GB, which may cause stuttering or slowdowns.`
        );

      }


      // Integrated GPU warning
      if (
        gpuName.includes("Vega") ||
        gpuName.includes("UHD") ||
        gpuName.includes("Iris")
      ) {

        warnings.push(
          "Your selected graphics solution uses integrated/shared memory. Performance can be affected by RAM speed, memory configuration, and available system memory."
        );

      }


      // Low-end GPU warning
      if (
        gpuScore < game.baseGpu
      ) {

        warnings.push(
          "Your GPU is below this game's target graphics level, so lower settings and/or upscaling may be needed for a smoother experience."
        );

      }


      // CPU warning
      if (
        cpuScore < game.baseCpu
      ) {

        warnings.push(
          "Your CPU is below this game's target processor level and may limit performance in CPU-heavy areas."
        );

      }


      // Show warnings
      if (
        warnings.length > 0
      ) {

        hardwareWarningsList.innerHTML =
          warnings
            .map(
              warning =>
                `<li>${warning}</li>`
            )
            .join("");

        hardwareWarnings.hidden =
          false;

      } else {

        hardwareWarnings.hidden =
          true;

        hardwareWarningsList.innerHTML =
          "";

      }


      // ==========================================
      // EXPLANATION
      // ==========================================

      if (benchmark) {

        explanationText.textContent =
          `This result uses a benchmark recorded for ${gameName} on ${gpuName} with ${cpuName} at ${resolution}.`;

      } else {

        explanationText.textContent =
          `Based on your ${gpuName}, ${cpuName}, ${ram} GB RAM, ` +
          `and ${resolution === "720p" ? "720p" : "1080p"} resolution, ` +
          `RigMetric estimates around ${lowFPS}–${highFPS} FPS. ` +
          `The main limitation is likely your ${mainLimitation}. ` +
          `Actual performance can vary depending on drivers, game updates, ` +
          `thermal conditions, power limits, background applications, ` +
          `and in-game settings.`;

      }


      // ==========================================
      // SHOW RESULT
      // ==========================================

      result.hidden =
        false;


      // ==========================================
      // SCROLL TO RESULT
      // ==========================================

      result.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }
  );

}

// ==========================================
// END OF RIGMETRIC SCRIPT
// ==========================================
