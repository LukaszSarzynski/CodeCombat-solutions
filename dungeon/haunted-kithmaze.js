// Loops are a better way of doing repetitive things.

while (true) {
    // Wstaw tu polecenia, które chcesz powtórzyć
    hero.moveRight(2);
    while (true) {
        hero.moveUp(2);
        break;
    }
}
