//this file contains player attributes, inventory, and stats
function setPlayerName() {
  const input = document.getElementById("player-name-input").value.trim();
  const name = input || "Adventurer"; // fallback if empty
  document.getElementById("welcome-text").textContent = `Welcome to the Game, ${name}!`;
  document.getElementById("player-name-input").style.display = "none";
document.getElementById("submit-btn").style.display = "none";


let inventory = []; // inventory items


  // Save name to player object if needed:
  player.name = name;
}document.getElementById("player-name-input").style.display = none; 
document.getElementById("sumit-btn").style.display = none;

//information about the player's character.
const player = {
    // base stats, without modifications from items or skills.
    base: {
        health: 25,
        atk: 2,
        def: 1,
        speed: 1,
    } ,
    // our equipment slots, which can be filled with items.
    equipment: {
        weapon: null,
        armor: null,
        amulet: null,
    }
};
// the player's inventory.
let inventory = [
    { item: itemDataBase.healthPotion, quantity: 5 },
    { item: itemDataBase.goldPiece, quantity: 10 },
    { item: itemDataBase.silverPiece, quantity: 0 }
];

function equipItem(item) {
    if (!item.slot || !player.equipment.hasOwnProperty(item.slot)) {
        console.log("Invalid item slot");
        return;
    }
    player.equipment[item.slot] = item;
    console.log(`Equipped ${item.name} in ${item.slot} slot.`);
}