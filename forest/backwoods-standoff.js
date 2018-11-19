// Munchkins are attacking!
// The swarms will come at regular intervals.
// Whenever you can, cleave to clear the mass of enemies.

while (true) {
    var enemy = hero.findNearestEnemy();
    // Use an if-statement with isReady to check "cleave":
    if (hero.isReady("cleave")) {
        // Cleave!
        hero.cleave(enemy);
    }
    // Else, if cleave is not ready:
    else {
        // Attack the nearest ogre!
        hero.attack(enemy);
    }
}
