// You need to defeat ogres.
// Send wereyeti peasants to the ogre camp and watch.

// This function returns a friendly unit by the name.
function findFriendByName(name) {
    var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].id == name) {
            return friends[i];
        }
    }
    return null;
}

// The sergeant wrote the list of wereyeti peasants' names.
var sergeant = hero.findNearest(hero.findFriends());
var wereList = sergeant.wereList;
// The list isn't clean and contains redundant spaces. 
var wereNames = wereList.split(",");

// Iterate through wereNames array:
for(var i=0; i<wereNames.length; i++){
    // Store a name from the array in a variable:
    var sName = wereNames[i];
    // Trim the whitespace from the name
    // and save it in the new variable:
    var sNameTrim = sName.trim();
    // Use findFriendByName function to find a wereyeti:
    var fYeti = findFriendByName(sNameTrim);
    // Command that unit move to the ogre camp:
    hero.command(fYeti, "move", {'x': 48, 'y': 47});
}
