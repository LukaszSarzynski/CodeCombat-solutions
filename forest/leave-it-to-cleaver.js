// This shows how to define a function called cleaveWhenClose
// The function defines a parameter called `target`
function cleaveWhenClose(target) {
    if(hero.distanceTo(target) < 5) {
        // Put your attack code here
        // If cleave is ready, then cleave target
        if(hero.isReady("cleave"))
        {
            hero.cleave(target);
        }
        // else, just attack `target`!
        else {
            hero.attack(target);
        }
    }
}

// This code is not part of the function.
while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        // Note that inside cleaveWhenClose, we refer to the `enemy` as `target`.
        cleaveWhenClose(enemy);
    }
}
