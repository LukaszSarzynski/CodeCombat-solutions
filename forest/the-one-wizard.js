// Defeat as many ogres as you can.
// Use 'cast' and 'canCast' for spells.


function sayYourWish(sName, enemy) {
    if (hero.canCast(sName, enemy)) {
        hero.cast(sName, enemy);
        return true;
    }
    return false;
}

var iCount = 0;
// get better position
hero.moveXY(15, 40);

while (true) {
    // if hero don't feel good
    if (hero.health < 70) {
        sayYourWish("regen", hero);
    }
    var enemy = hero.findNearestEnemy();

    
    if (enemy && enemy.type == "ogre") {
        // for end if orge will be wisible
        hero.moveXY(5, 34); // boom !
        continue;
    } else if (enemy && enemy.type == "catapult") {
        // for catapult lightning 
        if (sayYourWish("lightning-bolt", enemy))
            continue;
    } else if (enemy && enemy.health > 0 && hero.distanceTo(enemy) < 30 && iCount > 21) {
        // if we have in cast distance we can use this  wish too:
        sayYourWish("chain-lightning", enemy);
        sayYourWish("root", enemy);
    }
    if (enemy && enemy.health > 0 && hero.distanceTo(enemy) < 30 && enemy.type != "catapult") {
        // and stardard normal attack
        iCount++;
        hero.attack(enemy);   
    }
}
