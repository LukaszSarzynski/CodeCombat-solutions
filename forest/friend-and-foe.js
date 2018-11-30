// Peasants and peons are gathering in the forest.
// Command the peasants to battle and the peons to go away!

while(true) {
    var friend = hero.findNearestFriend();
    if(friend) {
        hero.say("To battle, " + friend.id + "!");
    }
    // Now find the nearest enemy and tell them to go away.
    var enemy = hero.findNearestEnemy();
    if(enemy)
    {
        hero.say("go away, " + enemy.id + "!");
    }    
}