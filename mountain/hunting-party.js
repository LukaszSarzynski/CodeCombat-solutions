// You can use findNearestEnemy() on your soldiers to get their nearest enemy instead of yours.

while (true) {
    hero.move({'x':hero.pos.x+3,'y':hero.pos.y});
    var friends = hero.findFriends();
    // Use for-loop and for each friend:
    for(var i=0; i < friends.length ; ++i){
       
        // If they see an enemy then command to attack.
        hero.command(friends[i], "defend", {'x': friends[i].pos.x+2,'y': friends[i].pos.y});
        
        // Command to move east by small steps.
    }
   // hero.say("easy..");
}
