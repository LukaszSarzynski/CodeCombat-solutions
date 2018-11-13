
//The second tactic without equipment (max postion is #437 of 7965 Blue Team)
// Focusing on a better currency only in left site,
// the ability to find only one coin from equipment, 
// so need is use funny steps inside.
// min stuff: 
//  - moveXY [ex: leather boots]
//  - findNearestItem [ex: wooden glasses]

function goaway() {
    //ToDo
    
    //for x
    if (hero.pos.x > 22)
        deltaX = -8;
    else if (hero.pos.x < 22)
        deltaX = +7;
    //for y
    if (hero.pos.y > 45)
        deltaY = -11;
    else if (hero.pos.y < 25)
        deltaY = +9;
    var newx = hero.pos.x + deltaX;
    var newy = hero.pos.y + deltaY;
    //if(newx >)
    //hero.say(deltaX + "#" + deltaY + "x "+hero.pos.x+ "y "+hero.pos.y);
    go(newx, newy);
}
function go(hx, hy) {
    // hero.say(hx + "#" + hy + "x "+hero.pos.x+ "y "+hero.pos.y);
    if (hero.isReady("jump")) {
        hero.jumpTo({
            'x': hx,
            'y': hy
        });
    } else {
        hero.moveXY(hx, hy);
    }
}


var bronze = 0;
var deltaX = -10;
var deltaY = -10;
var lastHelth = hero.maxHealth;
while (true) {
    //  Find coins and/or attack the enemy.
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();
    //hero.say(hero.maxHealt + "#"+ hero.healt);
    if (lastHelth - 10 > hero.health && enemy) {
        hero.attack(enemy);
        item = hero.findNearestItem();    //lastHelth = hero.health;
    } else if (lastHelth - 10 > hero.health && item) {
        go(item.pos.x, item.pos.y);
    } else {
        if (item) {
            if (item.value > 1 && item.pos.x < 42) {
                go(item.pos.x, item.pos.y);
            } else if (bronze < 20 && item.pos.x < 36) {
                go(item.pos.x, item.pos.y);
                bronze += 1;
            } else if (hero.distanceTo(item) < 30 && item.pos.x < 36) {
                go(item.pos.x, item.pos.y);
            } else {
                goaway();
            }
        } else {
            goaway();
        }
    }
}
