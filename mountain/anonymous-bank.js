// Find the passwords and get the treasure.

// We intercepted a scout with an encoded message.
var encodedMessage = hero.findNearest(hero.findFriends()).message;
// Here we will store passwords.
var passwordArray = [];
// All real passwords have 5 letters.
var passwordLength = 5;

// Split encodedMessage by using a ";" and save the words in a variable.
var tmpPasswd = encodedMessage.split(";");
// Iterate over all of the words.
for( var i=0; i< tmpPasswd.length; i++) {
    // Trim each word to remove whitespace.
    var pass = tmpPasswd[i].trim();
    // If the length of the cleaned word is 5:
    if(pass.length === 5) {
        // Push the cleaned word to passwordArray:
        passwordArray.push(pass);
    }
}


// Move to each mark and say the correct password:
var marksPos = [{x: 12, y: 14}, {x: 38, y: 38},
    {x: 42, y: 16}, {x: 54, y: 12}];
for (var i = 0; i < 4; i++) {
    var pos = marksPos[i];
    hero.moveXY(pos.x, pos.y);
    var password = passwordArray[i];
    if (password) {
        hero.say(password);
    } 
    else {
        hero.say("qwerty");
    }
}
