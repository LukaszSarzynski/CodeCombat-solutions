// Move the hero and their pet to the exits.

function onHear(event) {
    // Get the volume and the password.
    var words = event.message.split(" ");
    var volume = words[0];
    var password = words[1];
    //  If the password should be loud:
    if (volume == "Loud") {
        // The pet repeats it in UPPER CASE.
        pet.say(words[1].toUpperCase());
    }
    // If the password should be quiet:
    if (volume == "Quiet") {
        // The pet repeats it in lower case.
        pet.say(words[1].toLowerCase());
    }
    pet.moveXY(pet.pos.x+ 24, pet.pos.y);
}

function passDoor() {
    var guard = hero.findNearest(hero.findFriends());
    var password = guard.password;
    //  If the password should be loud:
    if (guard.isLoud) {
        // Use the .toUpperCase() method on the password and say it.
        hero.say(password.toUpperCase());
    }
    // If the password should be quiet:
    else if (guard.isQuiet) {
        // Use the .toLowerCase() method on the password and say it.
        hero.say(password.toLowerCase());
    }
    hero.moveXY(hero.pos.x+ 24, hero.pos.y);
}

// Enable the pet to hear the guards.
pet.on("hear", onHear);
// The code for the hero to pass the doors.
hero.moveXY(10, 14);
passDoor();
passDoor();
