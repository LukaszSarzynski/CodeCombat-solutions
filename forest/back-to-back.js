// Stay in the middle and defend!

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        // Either attack the enemy...
        hero.attack(enemy);
    }
    else {
        // ... or move back to your defensive position.
        hero.moveXY(40, 34);
    }
}
