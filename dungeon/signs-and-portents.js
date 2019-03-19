// Your goal is to get to the right side of the map alive.
// You don't need to fight the ogres, just move! Your allies will protect you.
hero.moveRight();
hero.moveRight();
hero.moveUp();
// Use the movement commands to reach the red X!
hero.moveRight(3);
while (true) {
    hero.moveDown();
    hero.moveRight();
}
