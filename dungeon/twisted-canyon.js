// Escape from the maze by moving to the X mark.
//
var tc = "Treasure Chest";
hero.attack(tc);
hero.moveUp();
hero.moveDown();
hero.moveRight();
hero.attack("Gate");
hero.moveUp(2);
hero.moveDown(2);
hero.moveLeft(3);
while (true) {
    hero.moveUp(2);
    var enemy = true;
    while (enemy) {
        enemy = hero.findNearestEnemy();
        hero.attack(enemy);
        enemy = hero.findNearestEnemy();
    }
    hero.moveLeft(2);
    hero.moveRight(2);
    hero.moveDown();
    hero.moveRight();
    hero.moveUp();
    hero.moveRight();
}
