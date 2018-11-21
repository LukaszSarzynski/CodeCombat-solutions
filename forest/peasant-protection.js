while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if (distance < 10) {
        // Attack if they get too close to the peasant.
        hero.attack(enemy);
    }
    else {
        // Else, stay close to the peasant! Use else.
        hero.moveXY(40, 38);
    }    
    
}
