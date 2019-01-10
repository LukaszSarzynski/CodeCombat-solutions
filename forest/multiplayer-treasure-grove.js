
//This code win position #25 of 28931 in Read Team
// min stuff is:
//  - fast shoes with move method
//  - anny glass with findItems method (ex. wood glass)
// but good is get Ring of Speed + max health in other stuff

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


while (true) {
    // love an peace and collect money only, no attack other players
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
