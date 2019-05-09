// To grab the most gold quickly, just go after gold coins.

while (true) {
    var coins = hero.findItems();
    var coinIndex = 0;

    // Wrap this into a loop that iterates over all coins.
    while (coinIndex < coins.length) {
        var coin = coins[coinIndex];
        // Gold coins are worth 3.
        if (coin.value == 3) {
            // Only pick up gold coins.
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
        coinIndex++;
    }
}
