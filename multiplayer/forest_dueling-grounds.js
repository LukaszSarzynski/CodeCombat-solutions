
//fox tactics for the enemy with more health than me
// no stuff, no health but we can win
// example stuff: 
//  - moveXY [ex: leather boots]
//  - findNearestEnemy [ex: wooden glasses]

/*
 var senemy = hero.findNearestEnemy();
hero.attack(senemy);
hero.shield();
hero.attack(senemy);
//*/


//put the enemy in an ambush
hero.moveXY(48, 18);
    hero.moveXY(60, 27);
    hero.moveXY(67, 19);
    hero.moveXY(63, 14);
    hero.moveXY(57, 12);

    hero.moveXY(48,22);

    hero.moveXY(52, 33);

while(true) {
   
    //if enemy still exist kill it
    var enemy = hero.findNearestEnemy();      
    hero.attack(enemy);
    
 
}
