// The inner gate can hold for a long time.
// However, one of these peasants is an OGRE SPY!
// There is a hint! The spy's name has the letter "z"

// This function checks for a specific letter in a word.
// A string is just an array! Loop over it like an array
function letterInWord(word, letter) {
    for(var i=0; i < word.length; i++) {
        var character = word[i];
        // If character is equal to letter, return true
        if(character == letter)
        return true;
    }
    // The letter isn't in the word, so return false
    return false;
}

var spyLetter = "z";
var friends = hero.findFriends();

for (var j = 0; j < friends.length; j++) {
    var friendName = friends[j].id;
    if (letterInWord(friendName, spyLetter)) {
        // Reveal the spy!
        hero.say(friendName + " is a spy!!!");
    } else {
      //  hero.say(friendName + " is a friend.");
    }
}
