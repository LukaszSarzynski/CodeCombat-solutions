// my stuff:
//  - sword - Runesword (need to fast kill cacaput)
//  - Ring of Speed + Boots of Leaping (to run fasster, my maxspeed is 13)
//  - Twilight Glasses (max range, to gattering all friends in Gate 2)
//  - Enameled Dragonplate Set (Helmet + Armor) (to get healt)
//  - Second Ring - tarnished copper band (to more healt, so starting healt is 3861)
// my hero: Captain Anya Weston

function moveArmies(x, y) {
    for (var i = 0; i < aFriends.length; i++) {
        hero.command(aFriends[i], "defend", {
            'x': x,
            'y': y
        });
    }
}

function findAndKill(sType) {
    var topEnemy = hero.findNearest(hero.findByType(sType));
    if (topEnemy && topEnemy.health > 0) {
        hero.attack(topEnemy);
        return true;
    }
    return false;
}

// store first grup of Army
var aFriends = hero.findFriends();
// frist order, defend start position
moveArmies(hero.pos.x, hero.pos.y);

//#Gate 0.
// first destroy catapult
hero.attack(hero.findNearest(hero.findByType("catapult")));
hero.attack(hero.findNearest(hero.findByType("catapult")));

// move army next
moveArmies(121, 33);

while (true) {

    //#Gate 4
    if (hero.health < 1500 && hero.pos.x > 270) {
        // if we fill wrong, escape, Army shuld kill all
        hero.moveXY(279, 22);
        continue;
    }

    //#Gate 3 end
    // kill top enemy by order
    if (findAndKill("warlock"))
        continue;
    if (findAndKill("witch"))
        continue;
    if (findAndKill("skeleton"))
        continue;
    // next collect all precious
    var item = hero.findNearestItem();
    if (item && item.type == "gem" && hero.distanceTo(item) < 50) {
        hero.move(item.pos);
        moveArmies(285, 33);
        continue;
    }

    var enemy = hero.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) < 50) {
        // default rules is kill all, so herro shuld be move on right
        hero.attack(enemy);
    } else {
        if (hero.pos.x < 270 && hero.health > 3800) {
            //#Gate 3 begin
            // store first and second grup of Army 
            aFriends = hero.findFriends();
            hero.moveXY(169, 34);
            hero.moveXY(180, 12);
            moveArmies(hero.pos.x, hero.pos.y);
            hero.moveXY(245, 27);
            moveArmies(hero.pos.x, hero.pos.y);
            hero.moveXY(268, 34);
            moveArmies(285, 33);
            hero.moveXY(278, 49);
        }
    }
    if (hero.pos.x > 283) {
        //#Gate 4
        moveArmies(300, 34);
    }

}
