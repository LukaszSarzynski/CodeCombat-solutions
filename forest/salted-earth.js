// Ogres are attacking a nearby settlement!
// Be careful, though, for the ogres have sown the ground with poison.
// Gather coins and defeat the ogres, but avoid the burls and poison!

while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy.type == "munchkin" || enemy.type == "thrower") {
        hero.attack(enemy);
    }
    var item = hero.findNearestItem();
    // Check the item type to make sure the hero doesn't pick up poison!
    // If the item's type is "gem" or "coin":
    if(item.type == "gem" || item.type == "coin")
        // Then move and pick it up:
        {
            hero.moveXY(item.pos.x, item.pos.y);
        }
        
    
}
