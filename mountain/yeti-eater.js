// Yetis surround us and we need to defeat them.
// Luckily the wizard had time to cast the sleep spell.
// Your hero can devour the yetis' vital powers when they are defeated.
// Defeat them in the order from weakest to the strongest.

// The wizard sorted enemies, but in the order from the strongest to the weakest.
var wizard = hero.findNearest(hero.findFriends());
var yetis = wizard.findEnemies();

// You need iterate the yetis list in the reverse order with a 'for-loop'.
// The start value should be 'yetis.length - 1'.
// Iterate while the index greater than -1.
// Use the negative step -1.
for(var i = yetis.length -1 ; i >= 0; i--) {
    // Attack each enemy while its health greater than 0.
    while( yetis[i].health > 0) {
        hero.attack(yetis[i]);
    }
}

// Look at the guide to get hints.
