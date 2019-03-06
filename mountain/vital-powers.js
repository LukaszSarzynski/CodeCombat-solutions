// This level shows how to define your own functions.
// The code inside a function is not executed immediately. It's saved for later.
// This function has your hero collect the nearest coin.

function findGold(number) {
  var items = hero.findItems();
  var near = 9999;
  var nearIndex = 0;

  for (var i = 0; i < items.length; ++i) {
    if (items[i].value == number) {
      if (near > hero.distanceTo(items[i])) {
        near = hero.distanceTo(items[i]);
        nearIndex = i;
      }
    }
  }

  return items[nearIndex];
}

function getBetterGold() {
  var gold3 = findGold(3);
  var gold2 = findGold(2);
  var gold1 = findGold(1);

  var cost3 = calculateCost(gold3);
  var cost2 = calculateCost(gold2);
  var cost1 = calculateCost(gold1);

  if (cost3 <= cost2 && cost3 <= cost1) return gold3;

  if (cost2 <= cost3 && cost2 <= cost1) return gold2;

  if (cost1 <= cost3 && cost1 <= cost2) return gold1;
}

function calculateCost(coin) {
  var cost = 9999;

  if (coin) cost = hero.distanceTo(coin) / coin.value;

  return cost;
}

while (true) {
  var enemy = hero.findNearest(hero.findEnemies());

  if (enemy) {
    if (hero.isReady("bash") && hero.distanceTo(enemy) < 3) hero.bash(enemy);
  }
  var enemy = hero.findNearest(hero.findEnemies());
  if (enemy) {
    if (hero.isReady("cleave") && hero.distanceTo(enemy) < 10)
      hero.cleave(enemy);
  }

  while (hero.gold > hero.costOf("soldier")) {
    hero.summon("soldier");
  }
  var soldiers = hero.findFriends();
  var ien = 0;
  for (var is = 0; is < soldiers.length; ++is) {
    hero.command(soldiers[is], "defend", soldiers[is].pos);
  }

  var gold = getBetterGold();
  if (gold && hero.time < 45) {
    hero.move(gold.pos);
  } else {
    hero.shield();
  }
}
