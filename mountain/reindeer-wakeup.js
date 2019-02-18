// This array contains the status for each reindeer.
var deerStatus = [ "asleep", "asleep", "asleep", "asleep", "asleep" ];

// And this array contains our reindeer.
var friends = hero.findFriends();

// Loop through the reindeer and find the awake ones:
for (var deerIndex = 0; deerIndex < friends.length; deerIndex++) {
    var reindeer = friends[deerIndex];

    // Reindeer with y position > 30 aren't in a pen.
    // If so, set the reindeer's entry to "awake".
   if(reindeer.pos.y>30)
   deerStatus[deerIndex] = "awake";
}

// Loop through statuses and report to Merek.
for (var statusIndex = 0; statusIndex < deerStatus.length; statusIndex++) {
    // Tell Merek the reindeer index and its status.
    // Say something like "Reindeer 2 is asleep".

hero.say("Reinder " + statusIndex + " is " + deerStatus[statusIndex]);
}
