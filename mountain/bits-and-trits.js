// Incoming Ogre Brawlers!
// Make use of a Robot Walker to dispatch these enemies.
// The Robot Walker requires commands as strings.
// The first part will the enemy's health in ternary.
// The second part will be the enemy's type as binary.

function toTernary(number) {
    // Start with an empty string.
    var string = "";
    // Then, while the number isn't zero:
    while(number !== 0) {
        // We grab the remainder of our number.
        var remainder = number % 3;
        // This is our iterator method. 'number' decrements here.
        number = (number - remainder) / 3;
        // Append the string to the remainder.
        string = remainder + string;
    }
    // Finally we want to return our constructed string.
    return string;
}

function toBinary(number) {
    var string = "";
    // Go through the steps again:
    while(number !== 0) {
        var rem = number %2;
        number = (number - rem) /2;
        string = rem + string;
        
    }
        // Get remainder, decrement, and append string.
        
    // Remember that binary is another way of saying '2'!
    
    return string;
}

while(true) {
    var enemies = hero.findEnemies();
    var dangerous = findMostDangerous(enemies);
    if(dangerous) {
        // The way the robot takes commands is in the form of:
        // ternary(enemyHealth) + " " + binary(enemyType)
        hero.say(toTernary(dangerous.health) + " " + toBinary(dangerous.type));
    }
}

// In this level the Ogre Brawlers are more powerful if they have more health.
function findMostDangerous(enemies) {
    var mostDangerous = null;
    var mostHealth = -Infinity;
    for(var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        if(enemy.health > mostHealth) {
            mostDangerous = enemy;
            mostHealth = enemy.health;
        }
    }
    return mostDangerous;
}
