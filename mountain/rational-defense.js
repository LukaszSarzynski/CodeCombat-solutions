// Protect the peasants.

// Move the peasants away from the woods.
function hideUnits(units) {
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        hero.command(unit, "move", {x: 34, y: 10 + i * 12});
    }
}

// The peasants know the order in which to build the traps.
var peasants = hero.findFriends();
var buildOrder = peasants[0].buildOrder;
var separator = ",";
// Split buildOrder with a comma (",")
// and save the result to the variable `types`:
var types =  buildOrder.split(separator);

// There are the same number of peasants as types.
for (var index = 0; index < peasants.length; index++) {
    var peasant = peasants[index];
    var x = 16;
    var y = 10 + index * 12;
    // Get buildType by `index` from the array of types:
    var target = {'x':x,'y':y};
    // Command the peasant to buildXY the buildType at x and y:
    hero.command(peasant, "buildXY",types[index], x,y);
}


// Watch for enemies and move peasants when ogres attack.
while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hideUnits(peasants);
        break;
    }
}

// Fight the ogres:
while(true)
{
    var enemy = hero.findNearestEnemy();
    if( enemy)
    hero.attack( enemy);
}
