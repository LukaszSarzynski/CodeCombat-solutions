// Shout to activate the  bombs and move to the entrance.

// The function checks if numbers are almost equal.
function almostEqual(n1, n2) {
    return Math.abs(n1 - n2) <= 0.5;
}

// The function checks that all 
// thangs are on the same distance from the hero.
function allSameDistance(thangs) {
    if (thangs.length === 0) {
        return true;
    }
    // We can use any thang as an etalon.
    var etalon = hero.distanceTo(thangs[0]);
    // Iterate all thangs:
    for(var i =0; i< thangs.length; i++ ) {
        // Use almostEqual to compare `etalon` and the distance to `unit`.
        // If they are not equal (almost):
        if(!almostEqual(etalon, hero.distanceTo(thangs[i]))) {
            // Return false.
            return false;
        }
    }
    // All the same. Return  true.
    return true;
    
}

var bombs = hero.findEnemies();
for (var x = 36; x <= 44; x++) {
    for (var y = 30; y <= 38; y++) {
        hero.moveXY(x, y);
        if (allSameDistance(bombs)) {
            // It's a safe spot. Rock'n'Roll!
            hero.say("HEEEEEEEEEY!!!");
            hero.moveXY(40, 56);
        }
    }
}

hero.say("Heh. Nothing.");
