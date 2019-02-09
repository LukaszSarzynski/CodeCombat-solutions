// Ogre Witches have some unpleasant surprises ready for you.

// Define a chooseTarget function which takes a friend argument
// Returns the a target to attack, depending on the type of friend.
// Soldiers should attack the witches, archers should attack nearest enemy.

var ar = hero.findByType("archer");
var so = hero.findByType("soldier");

    var witch = hero.findNearest(hero.findByType("witch"));
    for(var i =0; i< 5 ; ++i)
    {
        hero.command(so[i], "attack", witch);
    }
