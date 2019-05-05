// findEnemies returns a list of all your enemies.
// Only attack shamans. Don't attack yaks!

var enemies = hero.findEnemies();
var enemyIndex = 0;

// Wrap this section in a while loop to iterate all enemies.
// While the enemyIndex is less than the length of enemies
while (enemyIndex < enemies.length) {
    var enemy = enemies[enemyIndex];
    if (enemy.type == 'shaman') {
        while (enemy.health > 0) {
            hero.attack(enemy);
        }
    }
    // Remember to increment enemyIndex
    enemyIndex++;
}


