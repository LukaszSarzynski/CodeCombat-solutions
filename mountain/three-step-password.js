// Find the password for the gates and defeat the ogres.

// Get the secret message.
hero.moveXY(52, 50);
var friend = hero.findNearest(hero.findFriends());
var message = friend.message;

// Get the separator symbol.
hero.moveXY(66, 34);
friend = hero.findNearest(hero.findFriends());
var separator = friend.separator;

// Get the index.
hero.moveXY(52, 18);
friend = hero.findNearest(hero.findFriends());
var index = friend.index;

// Move to the gates.
hero.moveXY(44, 34);
// Split `message` with `separator` to get an array:
var aMessage = message.split(separator);
// Get the password from the array of words by `index`:
hero.say(aMessage[index]);
// Say the password:


// Defeat the ogres:
while(true)
{
    var enemy = hero.findNearestEnemy();
    if(enemy)
    {
        hero.attack(enemy);
    }
}
