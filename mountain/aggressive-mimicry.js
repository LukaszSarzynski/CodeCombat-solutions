// Protect the village from the ogres. 
// Watch for ogres, peasants and ogres disguised as peasants.

// This function checks if the text starts with the word.
function startsWith(text, word) {
    // If the word is longer then the text:
    if(word.length > text.length) {
        return false;
    }
    // Loop through the indexes of word and text.
    for (var index = 0; index < word.length; index++) {
        // If characters with the same index are different:
        if (word[index] != text[index]) {
            // Then the word doesn't coincide with the text.
            return false;
        }
    }
    // We checked all letters and they are the same.
    return true;
}

var ogreNameStart = "Zog";

while(true) {
    var suspectFriend = hero.findNearest(hero.findFriends());
    var suspectName = suspectFriend.id;
    // Use the function "startsWith" to check
    // if suspectName starts with "Zog":
    if(startsWith(suspectName,"Zog")){
        // Then attack suspectFriend:
        while(suspectFriend.health >0){
            hero.attack(suspectFriend);
        }
        
    }
    var enemy = hero.findNearestEnemy();
    // if there is an enemy, then attack it:
    if(enemy)
    {
         while(enemy.health >0){
            hero.attack(enemy);
        }
    }
    // Else return to the red X mark:
    hero.moveXY(27, 27);
}
