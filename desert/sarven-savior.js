// An ARRAY is a list of items.

// This array is a list of your friends' names.
var friendNames = ['Joan', 'Ronan', 'Nikita', 'Augustus'];

// Array indices start at 0, not 1!
var friendIndex = 0;

// Loop over each name in the array.
// The .length property gets the length of the array.
while (friendIndex < friendNames.length) {
    // Use square brackets to get a name from the array.
    var friendName = friendNames[friendIndex];
    
    // Tell your friend to go home.
    // Use + to connect two strings.
    hero.say(friendName + ', go home!');
    
    // Increment friendIndex to get the next name.
    friendIndex++;
}

// Retreat to the oasis and build a "fence" on the X.
hero.buildXY("fence", 30, 29);