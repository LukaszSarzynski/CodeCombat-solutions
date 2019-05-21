// Get the hero and the peasant to the south.

// The function move your hero down along the center line.
function moveDownCenter() {
    var x = 40;
    var y = hero.pos.y - 12;
    hero.moveXY(x, y);
}

// The function build a fence on the right of something.
function buildRightOf(something) {
    // buildXY a "fence" 20 meters to something's right.
    hero.buildXY("fence", something.pos.x+25, something.pos.y);    
}

// The function build a fence on the left of something.
function buildLeftOf(something) {
    // buildXY a "fence" 20 meters to something's left.
    hero.buildXY("fence", something.pos.x-27, something.pos.y);    
}

while(true) {
    var ogre = hero.findNearestEnemy();
    var coin = hero.findNearestItem();
    if (ogre) {
        buildLeftOf(ogre);
    }
    if (coin) {
        buildRightOf(coin);
    }
    moveDownCenter();
}