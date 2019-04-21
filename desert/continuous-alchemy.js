// Race munchkins to the water distilled by Omarn Brewstone!
// Use the `continue` statement to avoid poison.
while(true) {
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();
    
    // If there is no enemy, continue out of the loop.
    if(!enemy) {
        continue;
    }
    else {
        //hero.attack(enemy);
    }
    // If there is no item, ask for a potion then continue:
    if(!item) {
        hero.say("Give me a drink!");
        continue;
    }
    // If the item.type "poison", continue out of the loop.
    if(item.type == "potion"){
    // At this point, the potion must be a bottle of water
    // so moveXY to the potion, then back to the start!
        hero.moveXY(item.pos.x, item.pos.y);
        hero.moveXY(34, 47);
        continue;
    }
    
}
