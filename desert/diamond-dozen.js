// Claim the coins while defeating the marauding ogres.

function findMostHealth(enemies) {
    var target = null;
    var targetHealth = 0;
    var enemyIndex = 0;
    while(enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        if(enemy.health > targetHealth) {
            target = enemy;
            targetHealth = enemy.health;
        }
        enemyIndex += 1;
    }
    return target;
}

function valueOverDistance(item) {
    return item.value / hero.distanceTo(item);
}

// Return the item with the highest valueOverDistance(item)
function findBestItem(items) {
    var bestItem = null;
    var bestValue = 0;
    var itemsIndex = 0;
    
    // Loop over the items array.
    // Find the item with the highest valueOverDistance()
    for(var i=0; i < items.length; i++){
        var tmpItemValue =  valueOverDistance(items[i]);
        if(tmpItemValue > bestValue){
            bestValue = tmpItemValue;
            bestItem = items[i];
        }
    }
    return bestItem;
}

while(true) {
    var enemies = hero.findEnemies();
    var enemy = findMostHealth(enemies);
    if(enemy && enemy.health > 15) {
        while(enemy.health > 0) {
            hero.attack(enemy);
        }
    } else {
        var coins = hero.findItems();
        var coin = null;
        coin = findBestItem(coins);
        if(coin) {
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
    }
}
