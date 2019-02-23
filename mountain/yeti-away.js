// Follow one of the peasants and escape from the yeti.

function startsWith(phrase, word) {
    if (word.length > phrase.length) {
        return false;
    }
    // Iterate indexes from 0 to the length of the word.
    for(var i =0;i<word.length;++i){
        // Check the letter of phrase and word at index i
        // If they are not equal:
        if(word[i] != phrase[i])
        return false;
            // Then return false.
    }
    // All letters in the word checked, then return true.
    return true;
}

// Follow the local guide whose name starts with "Mac".
var guides = hero.findFriends();
for (var gIndex = 0; gIndex < guides.length; gIndex++) {
    var guide = guides[gIndex];
    if (startsWith(guide.id, "Mac")) {
        while(true) {
            hero.move(guide.pos);
        }
    }
}
