function startGame() {
  document.getElementById("game-output").textContent = "Welcome to the adventure!";
  // Additional setup here...
}

function startGame() {
  // Start game logic here...

  // Show hidden buttons
  document.getElementById("inventory-btn").classList.remove("hidden");
  document.getElementById("player-btn").classList.remove("hidden");

  // Optionally hide the start button
  document.getElementById("start-btn").classList.add("hidden");
}

function toggleInventory() {
    const panel = document.getElementById("inventory-section");
    panel.classList.toggle("hidden");
    displayInventory();
}

document.getElementById("combatBtn").addEventListener("click", () => {
  const combatDiv = document.getElementById("combatSection");
  combatDiv.style.display = combatDiv.style.display === "none" ? "block" : "none";
});

function displayInventory() {
    const list = document.getElementById("inventory-list");
    list.innerHTML = ""; // Clear existing items
    if (inventory.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No items in inventory";
        list.appendChild(li);
        return;
    }
    inventory.forEach((stack, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
         ${stack.item.name} x${stack.quantity}
      ${stack.item.slot ? `<button onclick="equipItemFromInventory(${index})">Equip</button>` : ""}`
      list.appendChild(li);
    });
    
    inventory.forEach(item => {
    const li = document.createElement("li");
        list.innerHTML = `
            ${item.name}
      <button onclick="equipItemFromInventory(${index})">Equip</button>`;
        list.appendChild(li);
    }
    );
}

function addToInventory(item) {
  const maxstack = newItem.maxstack || Infinity;
  const availableStack = inventory.find(stack => stack.item.name === item.name && stack.quantity < maxstack);
  if (availableStack) {
    availableStack.quantity ++;}
    else {
    inventory.push({ item, quantity: 1 });
  }
  console.log(`${item.name} added to your inventory!`);
}


function equipitemfromInventory(index) {
    if (item.slot && player.equipment.hasOwnProperty(item.slot)) {
        player.equipment[item.slot] = item;
        console.log(`Equipped ${item.name} in ${item.slot} slot.`);
    } else {
        console.log("Invalid item slot");
    }
}

function fightmonster() {
    console.log(`You encounter a ${monster}!`);
    while (player.health > 0 && monster.health > 0) {
        // determine attacking order based on speed
        const first = player.speed >= monster.speed ? "player" : "monster";
        const second = first === "player" ? "monster" : "player";

        const firstdamage =  Math.max(0, first.atk - second.def);
        second.health -= firstdamage;
        console.log(`${first} attacks ${second} for ${firstdamage} damage!`);
        if (second.health <= 0) {
            console.log(`${second} has been defeated!`);}
         else {
                const secondDamage = Math.max(0, second.atk - first.def);
                first.health -= secondDamage;
                console.log(`${second} attacks ${first} for ${secondDamage} damage!`);
                if (first.health <= 0) {
                    console.log(`${first} has been defeated!`);
                    return;
                }
                }
            }
            return;
        }