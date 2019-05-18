// You'll need good strategy to win this one!
// Your clone will have the same equipment you have!
// But, they're not very skilled at using special powers.

function findthrower() {
    var enemies = hero.findEnemies();
    for (var i = 0; i < enemies.length; ++i) {
        if (enemies[i].type == "thrower") {
            //hsay("jest " + enemies[i].pos.x + " " + enemies[i].pos.y);
            return enemies[i];
        }
    }
    return false;
}
function findShaman() {
    var enemies = hero.findEnemies();
    for (var i = 0; i < enemies.length; ++i) {
        if (enemies[i].type == "archer") {
            return enemies[i];
        }
    }
    return false;
}

function findOgre() {
    var enemies = hero.findEnemies();
    for (var i = 0; i < enemies.length; ++i) {
        if (enemies[i].type == "ogre") {
            return enemies[i];
        }
    }
    return false;
}

function howManyNear() {
    var enemies = hero.findEnemies();
    var howmany = 1;
    for (var i = 0; i < enemies.length; ++i) {
        if (hero.distanceTo(enemies[i]) < 5) {
            howmany++;
        }
    }
    // hsay("w kolo " + howmany);
    return howmany;
}
function hsay(text) {
}
function jumpAndDie(enemy) {
    //go to
    if (hero.isReady("jump") && enemy && hero.time > 5) {
        // hsay(" skacze do " + enemyt.pos.x + enemyt.pos.y);
        hero.jumpTo({
            'x': enemy.pos.x,
            'y': enemy.pos.y
        });
    } else if (enemy && enemy.type != "thrower") {
        hero.moveXY(enemy.pos.x, enemy.pos.y);
    }
    // hsay("bede bil");
    //kill
    kill(enemy);
}
function shieldatack(enemy) {
    if (hero.isReady("bash") && enemy && enemy.type != "archer" && enemy.type != "munchkin") {
        // hero.say("tarcza");
        hero.bash(enemy);
    } else if (enemy && enemy.health > 0) {
        //  hero.say(enemy.type +" zonk" + enemy.pos.x +" " +enemy.pos.y);
        hero.attack(enemy);
    }
}
function kill(enemy) {
    
    if(enemy.type =="sand-yak")
    {
        return;
    }
    
    if (enemy && howManyNear() > 4 && hero.isReady("cleave")) {
        hsay("bum bo " + howManyNear());
        hero.cleave(enemy);
    } else {
        hsay("jednegozabije bo w kolo " + howManyNear());
        shieldatack(enemy);
    }

   var nearenemy = hero.findNearestEnemy();
   if(!nearenemy || hero.distanceTo(nearenemy  ) > 10)
   {
    hero.moveXY(86, 71);
   }
}
var runX;
var runY;

    if (hero.isReady("jump") ) {
        // hsay(" skacze do " + enemyt.pos.x + enemyt.pos.y);
        hero.jumpTo({
            'x': 76,
            'y': 70
        });
    } 
        hero.moveXY(76, 70);

while (true) {
    if ( (hero.health < 100 && hero.time > 15) || !hero.findNearestEnemy()) {
        hsay("obona");
        var enemy = hero.findNearestEnemy();
        if (enemy && howManyNear() > 4 && hero.isReady("cleave")) {
            hsay("bum bo " + howManyNear());
            hero.cleave(enemy);
        }
        
        var ogre = findOgre();
        if(ogre.health > 20 && hero.distanceTo(ogre) < 20)
        {
            hero.say(ogre.pos.x);
        }
        
        hero.shield();
        continue;
    }
    var thrower = findthrower();
    /*
    if (thrower && hero.canElectrocute(thrower) && hero.isReady("electrocute") && howManyNear() >= 3) {
        hsay("piorunem go");
        hero.electrocute(thrower);    //continue;
    }*/
    if (thrower ) {
        hsay("podlece i zabije bo w kolo " + howManyNear());
        jumpAndDie(thrower);    continue;
    }    
    
    var shaman = findShaman();
    if (shaman) {
        hsay("SHAMAN !!podlece i zabije bo w kolo " + howManyNear());
        jumpAndDie(shaman);    // continue;
    }

    var enemy = hero.findNearestEnemy();
    kill(enemy);
}
