// Escape from Death Valley!
// Move by with a zigzag pattern using real modulo functions.

// This function returns a value from 0 to 15:
function mod15(n) {
    while (n >= 15) {
        n -= 15;
    }
    return n;
}

// This function should return a value from 0 to 9:
function mod9(n) {
    // While n is greater or equal to 9, subtract 9 from n:
    while(n>=9)
    {
        n-=9;
    }
    return n;
}

// Don't change the following code:
while (true) {
    var time = hero.time;
    //hero.say("t" +time);
    
    var x, y;
    if (time < 30) {
        //.say("m15 " +mod15(time));
        y = 10 + 3 * mod15(time);
    } else {
        y = 20 + 3 * mod9(time);
    }
    x = 10 + time;
   // hero.say("kor" +x +" " + y);
    hero.moveXY(x, y);
}
