// First, defeat 6 ogres.
// Then collect coins until you have 30 gold.

// This variable is used for counting ogres.
var defeatedOgres = 0;

// This loop is executed while defeatedOgres is less than 6.
while (defeatedOgres < 6) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
        defeatedOgres += 1;
    } else {
        hero.say("Ogres!");
    }
}

// Move to the right side of the map.
hero.moveXY(54, 51);

// This loop is executed while you have less than 30 gold.
while (hero.gold < 30) {
    // Find and collect coins.
    var item = hero.findNearestItem();
    if(item)
    hero.moveXY(item.pos.x, item.pos.y);    
    // Remove this say() message.
    //hero.say("I should gather coins!");
}

// Move to the exit.
hero.moveXY(76, 32);
