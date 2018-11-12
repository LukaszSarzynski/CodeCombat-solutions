// Move right to reach the oasis,
// Move left to avoid nearby yaks.
while(true) {
    var x = hero.pos.x;
    var y = hero.pos.y;
    var enemy = hero.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) < 10) {
        // Subtract 10 from x to move left.
        x-=10;
        // Use moveXY to move to the new x, y position.
        hero.moveXY(x, y);
    } else {
        // Add 10 to x to move right.
        x+=10;
        // Use moveXY to move to the new x, y position.
        hero.moveXY(x, y);
    }
    
}
