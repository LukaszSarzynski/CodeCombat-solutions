// Your goal is to protect Reynaldo
// Find the paladin with the lowest health.
function lowestHealthPaladin() {
    var lowestHealth = 99999;
    var lowestFriend = null;
    var friends = hero.findFriends();
    for (var f = 0; f < friends.length; f++) {
        var friend = friends[f];
        //if(friend.type != "paladin") { continue; }
        if (friend.health < lowestHealth && friend.health < friend.maxHealth) {
            lowestHealth = friend.health;
            lowestFriend = friend;
        }
    }
    return lowestFriend;
}
function findUgly() {
    var aEnemies = hero.findEnemies();
    for (var i = 0; i < aEnemies.length; i++) {
        if (aEnemies[i].type === "warlock") {
            return aEnemies[i];
        }
    }
    return false;
}
function commandPaladin(friend) {
    // Heal the paladin with the lowest health using lowestHealthPaladin()
    // You can use paladin.canCast("heal") and command(paladin, "cast", "heal", target)
    // Paladins can also shield: command(paladin, "shield")
    // And don't forget, they can attack, too!
    hero.command(friend, "defend", friend.pos);
    var friendNeedHelp = lowestHealthPaladin();
    if (friendNeedHelp && friend.canCast("heal", friendNeedHelp)) {
        hero.command(friend, "cast", "heal", friendNeedHelp);
    }
}
function getCoinByValue(iValue) {
    var aAllItems = hero.findItems();
    var aValueCoins = [];
    for (var i = 0; i < aAllItems.length; i++) {
        if (aAllItems[i].value === iValue) {
            aValueCoins.push(aAllItems[i]);
        }
    }
    if (aValueCoins.length) {
        return hero.findNearest(aValueCoins);
    } else {
        return false;
    }
}
function commandGriffin(friend) {
    if (friend.pos.x < 80) {
        hero.command(friend, "move", {
            'x': 90,
            'y': friend.pos.y
        });
    } else {
        friendAttackComand(friend);
    }
}
function friendAttackComand(friend) {
    var topEnemy = findUgly();
    if (topEnemy) {
        hero.command(friend, "attack", topEnemy);
    } else {
        hero.command(friend, "defend", friend.pos);
    }
}
function commandPeasant(friend) {
    if (friend.id == 'Hector') {
        // Hectror collect only sivler
        var oCoinSilver = getCoinByValue(2);
        if (oCoinSilver) {
            hero.command(friend, "move", oCoinSilver.pos);
        }
    } else {
        // Rose collect gold first, next brozne
        var oCoin = getCoinByValue(3);
        if (!oCoin) {
            // if not exist gold, get bornze
            oCoin = getCoinByValue(1);
        }
        // if fund somethig go there
        if (oCoin) {
            hero.command(friend, "move", oCoin.pos);
        }
    }
}
function commandFriends() {
    // Command your friends.
    var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if (friend.type == "peasant") {
            commandPeasant(friend);
        } else if (friend.type == "griffin-rider") {
            commandGriffin(friend);
        } else if (friend.type == "paladin") {
            commandPaladin(friend);
        }
    }
}
while (true) {
    commandFriends();
    // Summon griffin riders!
    if (hero.gold > hero.costOf("griffin-rider")) {
        hero.summon("griffin-rider");
    }
}
