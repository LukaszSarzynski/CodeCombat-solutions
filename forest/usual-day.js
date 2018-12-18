// Defeat munchkins, collect coins. Everything as usual.
// Use AND to check existence and type in one statement.

while (true) {
    var enemy = hero.findNearestEnemy();
    // With AND, the type is only checked if enemy exists.
    if (enemy && enemy.type == "munchkin") {
        hero.attack(enemy);
    }
    // Find the nearest item.
    var iteam = hero.findNearestItem();
    // Collect item if it exists and its type is "coin".
    if(iteam && iteam.type =="coin")
    {
        hero.moveXY(iteam.pos.x, iteam.pos.y);
    }
}
