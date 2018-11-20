// Ogres are scouting the forest!
// Use the distanceTo method to find where the enemies are.
// Say the distance for each enemy to tell the artillery where to fire!

var enemy1 = "Gort";
var distance1 = hero.distanceTo(enemy1);
hero.say(distance1);

var enemy2 = "Smasher";
var distance2 = hero.distanceTo(enemy2);
// Say the distance2 variable!
hero.say(distance2);
// Don't shoot at your friends!
var friend3 = "Charles";

// The last ogre.
var enemy4 = "Gorgnub";
// Find and say the distance to enemy4:
hero.say(hero.distanceTo(enemy4));
