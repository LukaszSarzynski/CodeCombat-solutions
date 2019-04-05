// Get to the oasis. Watch out for new enemies: ogre scouts!
// Go up and right by adding to the current X and Y position.

while(true) {
    // If there's an enemy, attack.
    if(hero.findNearestEnemy())
    hero.attack(hero.findNearestEnemy());
    
    // Else, keep moving up and to the right. 
    hero.moveXY(hero.pos.x+3, hero.pos.y+3);
}
