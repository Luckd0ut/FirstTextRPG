//this section is for declaring objects.

function setPlayerName() {
  const input = document.getElementById("player-name-input");
  player.name = input ? input.value.trim() || "adventurer" : "Adventurer"; // fallback if empty
  updateStatusPanel();

document.getElementById("welcome-text").textContent = `Welcome to the Game, ${player.name}!`
document.getElementById("submit-btn").classList.add("hidden");
document.getElementById("player-name-input").classList.add("hidden");
}


function loadGame() {
const parsedData = JSON.parse(localStorage.getItem("textRPG"));
player.name = parsedData.player.name || "Adventurer"; 
player.inventory = parsedData.inventory
player.equipment = parsedData.equipment;
//player.experience = parsed.dat.experience
const returnMessage = document.getElementById("return-message-text");
document.getElementById("return-message").classList.remove("hidden");
returnMessage.textContent = `Welcome back, ${player.name}!`;
returnMessage.style.opacity = 1;
returnMessage.style.display = "block";
document.getElementById("load-btn").classList.add("hidden");
document.getElementById("welcome-text").classList.add("hidden");
document.getElementById("status-panel").classList.remove("hidden");
document.getElementById("submit-btn").classList.add("hidden");
document.getElementById("player-name-input").classList.add("hidden");
updateStatusPanel();

setTimeout(() => {
  let opacity = 1;
  const fadeEffect = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(fadeEffect);
      returnMessage.style.display = "none";
    } else {
      opacity -= 0.1;
      returnMessage.style.opacity = opacity;
    }
  }, 100);
  }, 4000); // Fade out after 3 seconds
}



function startGame() {
  document.getElementById("inventory-btn").classList.remove("hidden");
  document.getElementById("player-btn").classList.remove("hidden");
  document.getElementById("start-btn").classList.add("hidden");
  document.getElementById("welcome-text").classList.add("hidden");
  document.getElementById("status-panel").classList.remove("hidden");
  document.getElementById("combat-btn").classList.remove("hidden");
  updateStatusPanel();
}
// everything above this line works without bugs


function toggleInventoryDisplay() {
  const inventorySection = document.getElementById("inventory-section");
  const inventoryList = document.getElementById("inventory-list");
// Toggle the visibility of the inventory section
  inventorySection.classList.toggle("hidden");
  //clear previous list
  inventoryList.innerHTML = "";

  if (player.inventory.length === 0) {
    inventoryList.innerHTML = "<li>Your inventory is empty.</li>";
  }
  else {
    player.inventory.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.quantity} x ${entry.item.name}`;
      inventoryList.appendChild(li);
    });
  }
  }


function saveGame() {
  const gameData = {
    player: player,
    inventory: player.inventory,
    equipment: player.equipment,
    //experience: player.experience, add later
  }
    const SerializedData = JSON.stringify(gameData); 
    localStorage.setItem("textRPG", SerializedData);
    alert("Game saved successfully!");
}
   






function updateStatusPanel() {
  // Update player name
  document.getElementById("player-name").textContent = `Name: ${player.name}`;

  // Update XP (once you've added that logic later)
  // document.getElementById("player-xp").textContent = `XP: ${player.xp}`;

  // Update Gold if you're tracking it in inventory
  const goldEntry = player.inventory.find(entry => entry.item.name === "GoldPieces");
  const goldCount = goldEntry ? goldEntry.quantity : 0;
  document.getElementById("player-gold").textContent = `Gold: ${goldCount}`;
}




let monster = null;
// this function spawns a random monster.

function spawnMonster() {
  const randomIndex = Math.floor(Math.random() * monsters.length);
  monster = {...monsters[randomIndex]};
  document.getElementById("monsterSpawnLog").textContent = `you encountered a wild ${monsters.name}.`
console.log("spawn clicked, monster is:", monster);
}
document.getElementById("spawn-btn").classList.remove("hidden");  







// this section is for the games combat logic. 

function runCombatTurn() {
  if (player.health <= 0 || monster.health <= 0) {
    return; // Do nothing if combat is already over
  }

  const playerGoesFirst = player.speed >= monster.speed;

  if (playerGoesFirst) {
    let damage = Math.max(player.atk - monster.def, 0);
    monster.health -= damage;
    document.getElementById("combatLog").textContent = `You hit the ${monster.name} for ${damage} damage!`;

    if (monster.health <= 0) {
      document.getElementById("combatMonsterLog").textContent = `You defeated the ${monster.name}!`;
      return;
    }

    let monsterDamage = Math.max(monster.atk - player.def, 0);
    player.health -= monsterDamage;
    document.getElementById("combatMonsterLog").textContent = `The ${monster.name} hits you for ${monsterDamage} damage!`;

    if (player.health <= 0) {
      document.getElementById("defeatLog").textContent = "You have been defeated!";
    }

  } else {
    let monsterDamage = Math.max(monster.atk - player.def, 0);
    player.health -= monsterDamage;
    document.getElementById("combatMonsterLog").textContent = `The ${monster.name} hits you for ${monsterDamage} damage!`;

    if (player.health <= 0) {
      document.getElementById("defeatLog").textContent = "You have been defeated!";
      return;
    }

    let damage = Math.max(player.atk - monster.def, 0);
    monster.health -= damage;
    document.getElementById("combatLog").textContent = `You hit the ${monster.name} for ${damage} damage!`;

    if (monster.health <= 0) {
      document.getElementById("combatMonsterLog").textContent = `You defeated the ${monster.name}!`;
    }
  }
}
document.getElementById("atk-btn").addEventListener("click", runCombatTurn);











document.addEventListener("DOMContentLoaded", () => {
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("inventory-btn").addEventListener("click", () => {
document.getElementById("inventory").textContent = "you have opened your inventory";
document.getElementById("inventory").addEventListener("click",
  toggleInventoryDisplay);
document.getElementById("spawn-btn").addEventListener("click", spawnMonster);
});
document.getElementById("save-btn").addEventListener("click", saveGame);
document.getElementById("load-btn").addEventListener("click", loadGame);
});