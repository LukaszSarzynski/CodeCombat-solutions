// Ogres are trying to take out your reindeer!
// Keep your archers back while summoning soldiers to attack.
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
hero.pickUpCoin = function () {
    // Collect coins.
    hero.move(getBetterGold().pos);
};
hero.summonTroops = function () {
    // Summon soldiers if you have the gold.
    if (hero.costOf("soldier") < hero.gold) {
        hero.summon("soldier");
    }
};
// This function has an argument named soldier.
// Arguments are like variables.
// The value of an argument is determined when the function is called.
hero.commandSoldier = function (soldier) {
    // Soldiers should attack enemies.
    var enemy = hero.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) < 35)
        hero.command(soldier, "attack", enemy);
};
// Write a commandArcher function to tell your archers what to do!
// It should take one argument that will represent the archer passed to the function when it's called.
// Archers should only attack enemies who are closer than 25 meters, otherwise, stay still.
while (true) {
    hero.pickUpCoin();
    hero.summonTroops();
    var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if (friend.type == "soldier") {
            // This friend will be assigned to the variable soldier in commandSoldier
            hero.commandSoldier(friend);
        } else if (friend.type == "archer") {
            // Be sure to command your archers.
            hero.command(friend, "defend", {
                'x': 17,
                'y': 49
            });
        }
    }
}
