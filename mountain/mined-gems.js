// Collect 4 gems. Don't touch gems from the inner circle.

// The radius of the gem-trap circle.
var innerRadius = hero.distanceTo(hero.findNearestItem());

// This function check that a is definitely greater than b.
function definitelyGreater(a, b) {
    return a > b + 0.5;
}

var center = {"x": 40, "y": 34};
var gems = hero.findItems();

// Iterate all gems:
for(var i=0; i<gems.length; i++) {
    // Use definitelyGreater to check if the distance to a gem.
    // is greater than the inner radius:
    if(definitelyGreater(hero.distanceTo(gems[i]),innerRadius)) {
        // Collect the gem.
        hero.moveXY(gems[i].pos.x,gems[i].pos.y);
        // Return to the center.
        hero.moveXY(center.x,center.y);
    }
}
