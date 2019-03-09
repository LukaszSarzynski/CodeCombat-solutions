while(true) {
    // Collect gold.
    if(hero.gold < hero.costOf("soldier")){
    // If you have enough gold, summon a soldier.
     var item = hero.findNearestItem();
     if(item)
     hero.move(item.pos);
    }
    else {
        hero.summon("soldier");
    }
    // Use a for-loop to command each soldier.
    var friends = hero.findFriends();
    // For-loops have 3 parts, separated by semicolons.
    // for(initialization; condition; expression)
    // Initialization is done at the start of the first loop.
    // The loops continue while condition is true.
    for(var friendIndex = 0; friendIndex < friends.length; friendIndex++) {
        var friend = friends[friendIndex];
        if(friend.type == "soldier") {
            var enemy = friend.findNearestEnemy();
            // If there's an enemy, command her to attack.
            // Otherwise, move her to the right side of the map.
            if(enemy)
            hero.command(friend, "attack", enemy);
            else
            hero.command(friend, "move", {'x':77,'y':47});
            
        }
    }
}
