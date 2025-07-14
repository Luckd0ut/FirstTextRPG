 

//information about the player's character.
const player = {
    inventory: [
        { item: itemDataBase.HealthPotion, quantity: 5 },
    ] ,
    // base stats, without modifications from items or skills.
    base: {
        health: 25,
        atk: 1,
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

function equipItem(item) {
    if (!item.slot || !player.equipment.hasOwnProperty(item.slot)) {
        console.log("Invalid item slot");
        return;
    }
    player.equipment[item.slot] = item;
    console.log(`Equipped ${item.name} in ${item.slot} slot.`);
}