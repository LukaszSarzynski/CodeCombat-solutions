// Hushbaum has been ambushed by ogres!
// She is busy healing her soldiers, you should command them to fight!
// The ogres will send more troops if they think they can get to Hushbaum or your archers, so keep them inside the circle!

// Soldiers spread out in a circle and defend.
function commandSoldier(soldier, soldierIndex, numSoldiers) {
    var angle = Math.PI * 2 * soldierIndex / numSoldiers;
    var defendPos = {x: 41, y: 40};
    defendPos.x += 10 * Math.cos(angle);
    defendPos.y += 10 * Math.sin(angle);
    hero.command(soldier, "defend", defendPos);
}

// Find the strongest target (most health)
// This function returns something! When you call the function, you will get some value back.
function findStrongestTarget() {
    var mostHealth = 0;
    var bestTarget = null;
    var enemies = hero.findEnemies();
    // Figure out which enemy has the most health, and set bestTarget to be that enemy.
    for(var i =0;i < enemies.lenght; ++i)
    {
        if(mostHealth < enemies[i].health)
        {
            mostHealth = enemies[i].health;
            bestTarget  = enemies[i];
        }
    }    
    // Only focus archers' fire if there is a big ogre.
    if (bestTarget && bestTarget.health > 15) {
        return bestTarget;
    } else {
        return null;
    }
}


// If the strongestTarget has more than 15 health, attack that target. Otherwise, attack the nearest target.
function commandArcher(archer) {
    var nearest = archer.findNearestEnemy();
    if(archerTarget) {
        hero.command(archer, "attack", archerTarget);
    } else if(nearest) {
        hero.command(archer, "attack", nearest);
    }
}

var archerTarget = null;
while(true) {
    // If archerTarget is defeated or doesn't exist, find a new one.
    if(!archerTarget || archerTarget.health <= 0) {
        // Set archerTarget to be the target that is returned by findStrongestTarget()
        archerTarget = findStrongestTarget();
    }
    var friends = hero.findFriends();
    var soldiers = hero.findByType("soldier");
    // Create a variable containing your archers.
    var archers = hero.findByType("archers");
    for(var i=0; i < soldiers.length; i++) {
        var soldier = soldiers[i];
        commandSoldier(soldier, i, soldiers.length);
    }
    // use commandArcher() to command your archers
    for(var i=0; i < archers.length; i++) {
       
        commandArcher(archers[i],archerTarget);
    }    
}
