function startGame() {
  document.getElementById("game-output").textContent = "Welcome to the adventure!";
  // Additional setup here...
}

function startGame() {
  // Start game logic here...

  // Show hidden buttons
  document.getElementById("inventory-btn").classList.remove("hidden");
  document.getElementById("player-btn").classList.remove("hidden");

  // Optionally hide the start and submit buttons
  document.getElementById("start-btn").classList.add("hidden");
}

// this section is for all of my constants and variables.