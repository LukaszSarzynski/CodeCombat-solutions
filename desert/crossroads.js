// Use "fire-trap"s to defeat the ogres.

var x =0 ;
var y = 0;

while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        // If the enemy is to the left of the hero:
        x = 40;
        y =34;        
        if(enemy.pos.x < hero.pos.x) {
            // buildXY a "fire-trap" on the left X.
            x =25;
        // If the enemy is to the right of the hero:
        } else if (enemy.pos.x > hero.pos.x) {
            // buildXY a "fire-trap" on the right X.
            x = 55;
        // If the enemy is below the hero:
        } else if (enemy.pos.y < hero.pos.y) {
            // buildXY a "fire-trap" on the bottom X.
            y =19;
        // If the enemy is above the hero:
        } else if (enemy.pos.y > hero.pos.y) {
            // buildXY a "fire-trap" on the top X.
            y=49;
        }
        hero.buildXY("fire-trap", x, y);
    }
    // Move back to the center.
    hero.moveXY(40, 34);
}
