// Wait for ogres, defeat them and collect gold.

while(true) {
    var enemies = hero.findEnemies();
    // enemyIndex is used to iterate the enemies array.
    var enemyIndex = 0;
    // While enemyIndex is less than enemies.length
    while (enemyIndex < enemies.length) {
        // Attack the enemy at enemyIndex
        var enemy = enemies[enemyIndex];
        if(enemy.health > 0 && hero.isReady("cleave"))
        hero.cleave(enemy);
        else if(enemy.health > 0)
        hero.attack(enemy);
        // Increase enemyIndex by one.
        enemyIndex++;
    }
    var coins = hero.findItems();
    // coinIndex is used to iterate the coins array.
    var coinIndex = 0;
    while (coinIndex < coins.length) {
        // Get a coin from the coins array using coinIndex
        var item = coins[coinIndex];
        // Collect that coin.
        hero.moveXY(item.pos.x, item.pos.y);
        // Increase coinIndex by one.
        coinIndex++;
    }
}
