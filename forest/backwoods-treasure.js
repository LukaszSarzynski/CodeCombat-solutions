// This code pass 8 loops,
// Run in circle with invisibility
// 
// my stuff:
//  - Ring of Speed + Softened Leather Boots (to run fasster)
//  - Second Ring - The Precious (to invisibility)
//  - Shield - Deflector (to bash) 
//  - Enameled Dragonplate Set (Helmet + Armor) (to live longer)

// for first 60 gold we search on left side, next after 60 we search on all board
var xMax = 35;
var iGoldToChangeStragety = 60;
function findGold(number) {
    var items = hero.findItems();
    var near = 9999;
    var nearIndex = 0;
    for (var i = 0; i < items.length; ++i) {
        // store only gold where x postion is less that strategy
        if (items[i].pos.x < xMax) {
            if (items[i].value == number) {
                if (near > hero.distanceTo(items[i])) {
                    near = hero.distanceTo(items[i]);
                    nearIndex = i;
                }
            }
        }
    }
    if (near < 9999)
        return items[nearIndex];
    else {
        return null;
    }
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
// calculate cost to move to coint, so value and distace to coin
function calculateCost(coin) {
    var cost = 9999;
    if (coin)
        cost = hero.distanceTo(coin) / coin.value;
    return cost;
}

function findUgly() {
    var enemies = hero.findEnemies();
    var aEnemiesUgly = [];
    for (var i = 0; i < enemies.length; ++i) {
        if ((enemies[i].type == "fangrider" || enemies[i].type == "shaman" || enemies[i].type === "thrower") && enemies[i].pos.x < xMax) {
            aEnemiesUgly.push(enemies[i]);
        }
    }
    return aEnemiesUgly;
}

function findTopEnemy() {
    var enemies = hero.findEnemies();
    var aTopEnemies = [];
    for (var i = 0; i < enemies.length; ++i) {
        if ((enemies[i].type == "witch" || enemies[i].type == "warlock") && enemies[i].pos.x < xMax) {
            aTopEnemies.push(enemies[i]);
        }
    }
    return aTopEnemies;
}


var dTimeInvisibility = 0;
while (true) {
    // if hero is invisiblity enemy don't atack
    if (hero.canCast("invisibility") && hero.time > 18) {
        hero.cast("invisibility", hero);
        dTimeInvisibility = hero.time + 4;
    }
    if (hero.time > dTimeInvisibility) {

        // first priority is kill all ugly
        var enemyTop = hero.findNearest(findTopEnemy());
        if (enemyTop) {
            hero.attack(enemyTop);
            continue;
        }

        if (hero.time > 3) {
            //lightToEnmyIfNear();
        }

        // if we have any ugly enemy
        var enemy = hero.findNearest(findUgly());
        if (enemy && hero.isReady("bash") && hero.distanceTo(enemy) < 5) {
            hero.bash(enemy);
            continue;
        }
        if (enemy && hero.distanceTo(enemy) < 10) {
            hero.attack(enemy);
            continue;
        }
    }

    var gold = getBetterGold();
    if (gold) {
        // collect gold
        hero.moveXY(gold.pos.x, gold.pos.y);
    } else {
        // if no gold defense
        hero.shield();
    }

    if (hero.gold > iGoldToChangeStragety) {
        // start gatering gold on all board
        xMax = 80;
    }
}
