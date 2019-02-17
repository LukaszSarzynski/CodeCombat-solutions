// We should send soldiers to defend the village.
// Also we need clear out old fire traps.
// For both of those goals we'll use the artillery!
// The artillery can launch soldiers and anti-traps.

// The scout prepared a map of the landing zone.
// The map is a 2D array where cells are strings.
var landingMap = hero.findNearest(hero.findFriends()).landingMap;

// Tell the cannons the row, column, and target type.
// To get the element, use array[i][j]
// First, let's look at row 0 and column 0.
var cell = landingMap[0][0];
// Next, say the coordinates and what's there.
hero.say("row 0 column 0 " + cell);

// Next cell is the 3rd row and the 2nd column.
hero.say("row 3 column 2 " + landingMap[3][2]);

// Now do it yourself for the next point:
// The 2nd row and 1st column.
hero.say("row 2 column 1 " + landingMap[2][1]);
// The 1st row and 0th column.
hero.say("row 1 column 0 " +landingMap[1][0]);
// The 0th row and 2nd column.
hero.say("row 0 column 2 " +landingMap[0][2]);
// The 1st row and 3rd column.
hero.say("row 1 column 3 " +landingMap[1][3]);
