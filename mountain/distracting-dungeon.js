// Navigate the mountain maze with a peasant pal.
// Advanced while-loop usage is required!

function moveBothTo(point) {
    while(hero.distanceTo(point) > 1) {
        hero.move(point);
        hero.command(peasant, "move", point);
    }
}

var peasant = hero.findNearest(hero.findFriends());
while(true) {
    // Command your friend to build a decoy towards x + 1:
    hero.command(peasant, "buildXY", "decoy", peasant.pos.x + 2, peasant.pos.y);
    var nextPoint = {x: hero.pos.x, y: hero.pos.y + 28};
    moveBothTo(nextPoint);
    // Create a new x/y object +28 units away in the x dir:
    nextPoint = {x: hero.pos.x + 28, y: hero.pos.y};
    // Find the nearest enemy:
    var enemy = hero.findNearestEnemy();
    // While there is an enemy:
    while(enemy && hero.distanceTo(enemy) < 28 && enemy.type != "yeti") {
        // While the enemy's health is > 0:
        while(enemy.health > 0) {
            // Attack the enemy:
            hero.attack(enemy);
        }
        // Update the variable to the next nearest enemy:
        enemy = hero.findNearestEnemy();
    }
    moveBothTo(nextPoint);
}
