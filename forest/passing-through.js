// Don't insult this tribe of peaceful ogres.

while(true) {
    var item = hero.findNearestItem();
    if(item) {
        // If item.type IS NOT EQUAL TO "gem"
        if(item.type != "gem") {
            // Then follow your pet wolf.
            hero.moveXY(pet.pos.x, pet.pos.y);
        }
        // Else:
        else {
            // Move to the gem's position.
            hero.moveXY(item.pos.x, item.pos.y);
        }        
        
    }
}
