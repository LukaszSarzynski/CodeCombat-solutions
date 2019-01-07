// This code pass 6 loops,
// Run in circle with invisibility
// 
// my stuff:
//  - Ring of Speed + Softened Leather Boots (to run fasster)
//  - Second Ring - The Precious (to invisibility)
//  - Shield - Deflector (to bash) 
//  - Necklace - Boss Star I (to summon soldier)
//  - Enameled Dragonplate Set (Helmet + Armor) (to live longer)


var step = 18;

function runForrestRun() {
    var r = 40;
    var prec = 20;

    var angle = Math.PI * 2 * (step / prec);
    var dNewPosX = 60;
    var dNewPosY = 51;

    dNewPosX += r * Math.cos(angle);
    dNewPosY += r * Math.sin(angle);


    if (step > prec) {
        step = 0;
    }
    if (hero.time > dTimeInvisibility && hero.pos.x < 100 && hero.pos.x > 20) {

        // misdirection for enemy, soldier - cannon fodder
        if (hero.gold > hero.costOf("soldier") && hero.health < 3000 && step % 2 === 0) {
                hero.summon("soldier");
        }

        // this soldier shuld defend own posision
        var fr = hero.findNearest(hero.findFriends());
        if (fr) {     
            hero.command(fr, "defend", fr.pos);
        }

    }
    hero.moveXY(dNewPosX, dNewPosY);
    step++;

}

function findUgly() {
    var aEnemies = hero.findEnemies();
    var aUgly =[];
    for (var i = 0; i < aEnemies.length; ++i) {
        //||     (enemies[i].type == "shaman")
        if ( (aEnemies[i].type == "fangrider") ) {
            aUgly.push(aEnemies[i]);
        }
    }
    return  aUgly;
}


var dTimeInvisibility = 0;
while (true) {

    // if Hero is invisibility enemy don't attack it
    if (hero.canCast("invisibility") && hero.pos.y < 70 && hero.pos.y > 30 && hero.time > 3) {
        hero.cast("invisibility", hero);
        dTimeInvisibility = hero.time + 4;
    }

    if (hero.time > dTimeInvisibility) {
        // lightning to enemy, but this isn't need to alive 60s.
        if (hero.time > 3) {
            //lightToEnmyIfNear();
        }

        // attack only Ugly enemy, of corse if bash is ready and hero is visibility
        var enemy = hero.findNearest(findUgly());
        if (enemy && hero.isReady("bash") && hero.distanceTo(enemy) < 5) {
            hero.bash(enemy);
        }
    }

    // Forrest Gump Tactics, so runing in a circle for 60s.
    runForrestRun();

}

