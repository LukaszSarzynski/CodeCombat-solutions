// This level is a place for making flower art.
// The real goal is to experiment and have fun!
// If you draw something with at least 1000 flowers, you will *succeed* at the level.

function moveHeroIfCan(x,y)
{
    //if we can't go there save last position
    if(x < 15 || x > 145)
    x = hero.pos.x;
    //if we can't go there save last position
    if(y < 15 || y > 120)
    y = hero.pos.y;

    hero.moveXY(x,y);
}

var iLenght = 8; 
while(true)
{
    var x = hero.pos.x;
    var y = hero.pos.y;

    //happy fate
    var seed = Math.random();

    //decide of move dirrection
    if (seed < 0.25) {
        x = x + iLenght;
    } else if (seed < 0.5) {
        x = x - iLenght;
    } else if (seed < 0.75) {
        y = y + iLenght;
    } else {
        y = y - iLenght;
    }

    moveHeroIfCan(x,y);
}
