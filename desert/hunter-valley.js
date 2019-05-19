// Escape to the right side of the valley.

// The function has the hero move to down and right.
function moveDownRight(shift) {
    hero.moveXY(hero.pos.x + shift, hero.pos.y - shift);
}

// The function has the hero move to up and right.
function moveUpRight(shift) {
    // Complete this function:
    hero.moveXY(hero.pos.x + shift, hero.pos.y + shift);    
}


// The hunter is kind and will show the route.
var hunter = hero.findFriends()[0];
var route = hunter.route;
var routeIndex = 0;

while (routeIndex < route.length) {
    var direction = route[routeIndex];
    if (direction > 0) {
        moveUpRight(8);
    } 
    else  {
        // Use a function moveDownRight with the shift 8:
        moveDownRight(8);
    }
    routeIndex += 1;
}
