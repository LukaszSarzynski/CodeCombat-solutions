// Gather coins to summon soldiers and have them attack the enemy.
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
while (true) {
    // If you have funds for a soldier, summon one.
    if (hero.gold > hero.costOf("soldier")) {
        //hero.say("I should summon something here!");
        hero.summon("soldier");
    }
    var enemy = hero.findNearest(hero.findEnemies());
    if (enemy) {
        var soldiers = hero.findFriends();
        var soldierIndex = 0;
        var soldier = soldiers[soldierIndex];
        var enemies = hero.findEnemies();
        var ien = 0; 
        // Loop over all your soldiers and order them to attack.
        for (var is = 0; is < soldiers.length; ++is) {
            var enemy = enemies[ien];
            // Use the 'attack' command to make your soldiers attack.
            hero.command(soldiers[is], "attack", enemy);
            if (ien < enemies.length - 1)
                ien++;
            else
                ien = 0;
        }
    }
    // Move to the nearest coin.
    // Use move instead of moveXY so you can command constantly.
    var gold = getBetterGold();
    if (gold) {
        hero.move(gold.pos);
    }
}
