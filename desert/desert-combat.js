// while-loops repeat until the condition is false.

var ordersGiven = 0;
while (ordersGiven < 5) {
    // Move down 10 meters.
    hero.moveXY(hero.pos.x, hero.pos.y-10);    
    // Order your ally to "Attack!" with hero.say
    // They can only hear you if you are on the X.
    hero.say("Attack!");

    // Be sure to increment ordersGiven!
    ordersGiven++;    
}

while(true) {
    var enemy = hero.findNearestEnemy();
    // When you're done giving orders, join the attack.
    if(enemy)
    hero.attack(enemy);
}
