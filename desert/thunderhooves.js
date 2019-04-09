// Move right, to the oasis.
// Build a "fence" above or below when you see a yak.

while(true) {
    var yak = hero.findNearestEnemy();
    if (yak) {
        // If yak.pos.y is greater than hero.pos.y
         if(yak.pos.y > hero.pos.y){
            // buildXY a "fence" 10m below the yak.
            hero.buildXY("fence", yak.pos.x, yak.pos.y-10);
        // else: 
         }else{
             hero.buildXY("fence",  yak.pos.x, yak.pos.y+10);
         }
        
            // buildXY a "fence" 10m above the yak.
            
    } else {
        // moveXY right 10m towards the oasis.
        hero.moveXY(hero.pos.x+10, hero.pos.y);
    }
}
