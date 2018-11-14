
//The third tactic wit equipment who retirve array items (need .findItems function)
// We can sort it and choice better coin
//
// if we focus fast shoes and max heald (3861), and not fight, effect is good
// max postion is: 
//                 *  #27 of 28511 Read Team
//                 *  #47 of 7964 Bue Team  

//find coin of value sorted by distance to hero
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

//return one better money
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

//calculate cost to move to coint, so value and distace to coin
function calculateCost(coin) {
    var cost = 9999;

    if (coin)
        cost = hero.distanceTo(coin) / coin.value;

    return cost;

}


var lastHelth = hero.maxHealth;
while (true) {

    //set love an peace and collect money only
    var war = false;
    if (lastHelth - 10 > hero.health && war) {
        //  Find coins and/or attack the enemy.
        var enemy = hero.findNearestEnemy();
        if (enemy)
            hero.attack(enemy);
    } else {
        var gold = getBetterGold();
        if (gold) {
            if (hero.isReady("jump")) {
                hero.jumpTo({
                    'x': gold.pos.x,
                    'y': gold.pos.y
                });
            }
            else {
                hero.move(gold.pos);
            }
        }
    }
}
