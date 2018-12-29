// Collect all the coins in each meadow.
// Use flags to move between meadows.
// Press Submit when you are ready to place flags.

while(true) {
    var flag = hero.findFlag();
    if (flag) {
        // Pick up the flag.
        hero.pickUpFlag(flag);
    } else {
        // Automatically move to the nearest item you see.
        var item = hero.findNearestItem();
        if (item) {
            var position = item.pos;
            var x = position.x;
            var y = position.y;
            hero.moveXY(x, y);
        }
    }
}
