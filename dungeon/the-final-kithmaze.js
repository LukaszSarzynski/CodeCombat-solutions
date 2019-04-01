// Use a while-true loop to both move and attack.

while(true) {
    hero.moveRight();
    hero.moveUp();
    hero.moveRight();
    var en = hero.findNearestEnemy();
    hero.attack(en);
    hero.attack(en);
    hero.moveDown(2);
    hero.moveUp();
}
