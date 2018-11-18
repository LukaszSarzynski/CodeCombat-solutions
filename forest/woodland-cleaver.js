// Use your new "cleave" skill as often as you can.

hero.moveXY(23, 23);
while(true) {
    var enemy = hero.findNearestEnemy();
    if (hero.isReady("cleave")) {
        // Cleave the enemy!
        hero.cleave(enemy);
    }
    else {
        // Else (if cleave isn't ready), do your normal attack.
        hero.attack(enemy);
    }
}
