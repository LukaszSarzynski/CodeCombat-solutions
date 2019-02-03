// We need square flower fences around the statues.

// This function should make a square with the certain side
//  around the center {cx, cy} point.
function growSquare(cx, cy, side) {
    // Move to any corner of the square.
    hero.moveXY(cx-side/2, cy+side/2);
    // Start growing.
    hero.toggleFlowers(true);
    // Now move to all other corners one by one.
    // Use clockwise or countercloclwise order.
    hero.moveXY(hero.pos.x, hero.pos.y - side);
    hero.moveXY(hero.pos.x+ side, hero.pos.y);
    hero.moveXY(hero.pos.x, hero.pos.y  + side);
    // Don't forget to return in the first corner.
     hero.moveXY(cx-side/2, cy+side/2);
    // Stop growing.
    hero.toggleFlowers(false);
}

// The keeper will tell you where to grow flowers.
var keeper = hero.findNearest(hero.findFriends());
var points = keeper.pointsForWork;
// All squares should have the same size.
var squareSize = 8;
// We don't need excess flowers.
hero.toggleFlowers(false);

for (var index = 0; index < points.length; index++) {
    var pos = points[index];
    // Don't forget complete this function.
    growSquare(pos.x, pos.y, squareSize);
}
