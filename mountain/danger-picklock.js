// You need to break the door.

// The function checks the equality with 5% inaccuracy.
function almostEqual(a, b) {
    return Math.abs(a - b) < (b * 0.05);
}

// We have a bomb for the door, but it's weak.
var bomb = hero.findByType("robobomb")[0];
// Wizards can charge the bomb.
var wizards = hero.findByType("wizard");
// The area of a circle should be equal:
var chargeArea = bomb.chargeArea;
while(true) {
    // Circle radius:
    var radius = bomb.distanceTo(wizards[0]);
    // Find the current area of the circle.
    var wizzardsArea = radius * radius * Math.PI;
    // If it's almost equal to chargeArea:
    if(almostEqual(wizzardsArea, chargeArea)) {
        // Say anything: 
        hero.say("boom !");
    }
}
