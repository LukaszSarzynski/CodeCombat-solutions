// Your hero doesn't know the names of these enemies!
// Use the findNearestEnemy method on your new glasses.

// Assign the result of hero.findNearestEnemy() to the variable enemy1:
var en = true;
while(en)
{
    en = hero.findNearestEnemy();
    hero.attack(en);
    hero.attack(en);
}
