// Solve the riddler puzzle and find the treasure.
// Count the whitespace on both sides of a riddle.

// This function moves the hero N steps right.
function moveNSteps(n) {
    hero.moveXY(hero.pos.x + 8 * n, hero.pos.y);
}

// Read the riddle.
var riddle = hero.findNearestEnemy().riddle;
// Trim whitespace from both sides and store in a variable
var trimmed = riddle.trim();
// Find the difference between the `riddle` and `trimmed` lengths:
var diff = riddle.length - trimmed.length;
// Use the result and moveNSteps function to move to the spot:
moveNSteps(diff);
// Say something there!
hero.say(diff );
