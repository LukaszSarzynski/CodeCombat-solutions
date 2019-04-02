// Build 3 fences to keep the ogres at bay!

hero.moveDown();
var y = 34;
while(y > 25) {
    hero.buildXY("fence", 36, y);
    y -= 4;
}
hero.moveRight(3);
