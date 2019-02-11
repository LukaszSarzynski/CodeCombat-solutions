// The goal is to survive for 30 seconds, and keep the mines intact for at least 30 seconds.
function findGold(number) {
    var items = hero.findItems();
    var near = 9999;
    var nearIndex = 0;
    for (var i = 0; i < items.length; ++i) {
        if (items[i].value == number) {
            if (near > hero.distanceTo(items[i])) {
                near = hero.distanceTo(items[i]);
                nearIndex = i;
            }
        }
    }
    return items[nearIndex];
}
function getBetterGold() {
    var gold3 = findGold(3);
    var gold2 = findGold(2);
    var gold1 = findGold(1);
    var cost3 = calculateCost(gold3);
    var cost2 = calculateCost(gold2);
    var cost1 = calculateCost(gold1);
    if (cost3 <= cost2 && cost3 <= cost1)
        return gold3;
    if (cost2 <= cost3 && cost2 <= cost1)
        return gold2;
    if (cost1 <= cost3 && cost1 <= cost2)
        return gold1;
}
function calculateCost(coin) {
    var cost = 9999;
    if (coin)
        cost = hero.distanceTo(coin) / coin.value;
    return cost;
}
function pickUpCoin() {
    // Collect coins
    var item = getBetterGold();
    hero.move(item.pos);
}
function howManyNear() {
    var enemies = hero.findEnemies();
    var howmany = 1;
    for (var i = 0; i < enemies.length; ++i) {
        if (hero.distanceTo(enemies[i]) < 5) {
            howmany++;
        }
    }
    return howmany;
}

while (true) {

    if (hero.costOf("griffin-rider") < hero.gold)
        hero.summon("griffin-rider");
    for (var i = 0; i < hero.built.length; ++i) {
        hero.command(hero.built[i], "defend", {
            'x': 90,
            'y': 15
        });
    }
    var enemy = hero.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) < 30 && enemy.pos.x < 35) {
        
        while (enemy && enemy.health > 0) {
           if (enemy && howManyNear() > 4 && hero.isReady("cleave")) {
           
            hero.cleave(enemy);
        }
            
            if(hero.isReady("bash"))
            hero.bash(enemy);
            
            if(enemy.health > 0)
            hero.attack(enemy);
        }
    } else {
        pickUpCoin();
    }
}
