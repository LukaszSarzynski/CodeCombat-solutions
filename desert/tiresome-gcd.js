// Calculate the secret number and get into the Treasury.
// Those two guys know keys for the password.
var friends = hero.findFriends();
var number1 = friends[0].secretNumber;
var number2 = friends[1].secretNumber;
// Just to be sure that the first number is greater.
if (number2 > number1) {
    var swap = number1;
    number1 = number2;
    number2 = swap;
}

// It's simple but slow function to find gcd.
function bruteforceGCD (a, b) {
    hero.say("The naive algorithm.");
    var cycles = 0;
    // We enumerate all possible divisors.
    var counter = b;
    while (true) {
        cycles++;
        if (cycles > 100) {
            hero.say("Calculating is hard. I'm tired.");
            break;
        }
        // If both number have "counter" divisor.
        if (a % counter === 0 && b % counter === 0) {
            break;
        }
        counter--;
    }
    hero.say("I used " + cycles + " cycles");
    return counter;
}

// It's smart way to find gcd.
function euclidianGCD (a, b) {
    var cycles = 0;
    while (b) {
        cycles++;
        var swap = b;
        b = a % b;
        a = swap;
    }
    hero.say("I used " + cycles + " cycles");
    return a;
}

// Maybe you need to use another function?
var secretNumber = euclidianGCD(number1, number2); // ∆
hero.moveXY(48, 34);
hero.say(secretNumber);
// The treasury is open (I hope so)! Go there!
hero.moveXY(68, 34);
