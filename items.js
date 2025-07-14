// this file contains the items for the game
const itemDataBase = {

//currencies
GoldPieces : {
        name: "Gold Pieces",
        type: "currency",
        value: 1,
        maxstack: 9999999,
} ,
SilverPiece: {
        name: "Silver Piece",
        type: "currency",
        value: 0.1,
        maxstack: 9999999  } ,
    //gear
    Stick: {
        name: "stick",
        slot: "weapon",
        atk: 1,
        def: 0,
        speed: 0,
        maxstack: 1,
    } ,
        
Sword: {
        name: "Sword",
        slot: "weapon",
        atk: 3,
        def: 0,
        speed: 0,
        maxstack: 1,
        } ,

LeatherArmor: {
        name: "Leather Armor",
        slot: "armor",
        atk: 0,
        def: 2,
        speed: 0,
        maxstack: 1,
    } ,

Tunic : {
        name: "Tunic",
        slot: "armor",
        atk: 0,
        def: 1,
        speed: 0,
        maxstack: 1,
} , 

CrudeSpeedAmulet: {
        name: " crude Speed Amulet",
        slot: "amulet",
        atk: 0,
        def: 0,
        speed: 3,
        maxstack: 1,
} ,
AmuletOfAtk: {
        name: "Amulet of Attack",
        slot: "amulet",
        atk: 2,
        def: 0,
        speed: 0,
        maxstack: 1,
} ,
AmuletOfDef: {
        name: "Amulet of Defense",
        slot: "amulet",
        atk: 0,
        def: 2,
        speed: 0,
        maxstack: 1,
} ,

// Consumables
HealthPotion: {
        name: "Health Potion",
        type: "consumable",
        health: 10,
        maxstack: 25

}
};