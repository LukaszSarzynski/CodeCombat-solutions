// Build a fence around the farm.

// Take coordinates of the opposite corners.
var customer = hero.findNearest(hero.findFriends());
var x1 = customer.leftBottom.x;
var y1 = customer.leftBottom.y;
var x2 = customer.rightTop.x;
var y2 = customer.rightTop.y;
var step = 4;


// Let's build the left side.
for (var y = y2 - step; y >= y1; y -= step) {
    hero.buildXY("fence", x1, y);
}
// Build the bottom side.
for (var x = x1 + step; x <= x2; x += step) {
    hero.buildXY("fence", x, y1);
}
// Then the right side.
for (var y = y1 + step; y <= y2; y += step) {
    hero.buildXY("fence", x2, y);
}
// Build the top side.
for (var x = x2 - step; x >= x1; x -= step) {
    hero.buildXY("fence", x, y2);
}

// Let's build the left side.

