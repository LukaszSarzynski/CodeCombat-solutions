// Navigate through the woods, but be on the lookout!
// These forest cubbies may contain ogres!

hero.moveXY(19, 33);
var enemy = hero.findNearestEnemy();
// The if-statement will check if a variable has an ogre.
if(enemy) {
    hero.attack(enemy);
    hero.attack(enemy);
}

hero.moveXY(49, 51);
var enemy = hero.findNearestEnemy();
if(enemy) {
    // Attack the enemy here:
    hero.attack(enemy);
    hero.attack(enemy);
}

hero.moveXY(58, 14);
var enemy = hero.findNearestEnemy();
// Use an if-statement to check if enemy exists:
if(enemy){
    // If enemy exists, attack it:
    hero.attack(enemy);
    hero.attack(enemy);
}
    