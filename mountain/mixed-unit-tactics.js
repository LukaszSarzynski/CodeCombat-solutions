// Practice using modulo to loop over an array


function findGold(number)
{
    var items = hero.findItems();
    var near=9999;
    var nearIndex =0;

for(var i =0; i< items.length; ++i){
    if(items[i].value == number)
    {
        if(near > hero.distanceTo(items[i]))
        {
            near = hero.distanceTo(items[i]);
            nearIndex = i;
        }
    }
}

return  items[nearIndex];
    
}

function getBetterGold()
{
    var gold3 = findGold(3);
 var gold2 = findGold(2);
 var gold1 = findGold(1);
 
 var cost3 = calculateCost(gold3);
 var cost2 = calculateCost(gold2);
 var cost1 = calculateCost(gold1);
 
 if(cost3 <= cost2 && cost3 <= cost1)
return gold3;
 
 if(cost2 <= cost3 && cost2 <= cost1)
 return gold2;
 
 if(cost1 <= cost3 && cost1 <= cost2)
  return gold1;
}

function calculateCost(coin)
{
     var cost = 9999;
     
if(coin)
cost = hero.distanceTo(coin)/coin.value;

return cost;

}

var defendPoints = [{"x":31, "y": 56},{"x":31, "y": 35},{"x":31, "y": 21},{"x": 64, "y": 26}];

var summonTypes = ["archer","archer","archer","archer"];

// You start with 360 gold to build a mixture of soldiers and archers.
// this.built is an array of the troops you have built, ever.
// Here we use "this.built.length % summonTypes.length" to wrap around the summonTypes array
function summonTroops() {
    var type = summonTypes[hero.built.length % summonTypes.length];
    if(hero.gold >= hero.costOf(type)) {
        hero.summon(type);
    }
}

function commandTroops() {
    var friends = hero.findFriends();
    for(var friendIndex=0; friendIndex < friends.length; friendIndex++) {
        var friend = friends[friendIndex];
        // Use % to wrap around defendPoints based on friendIndex
        if(friend.type != "palisade")
        hero.command(friend, "defend", defendPoints[friendIndex %3]);
        // Command your minion to defend the defendPoint
        
    }
}

while(true) {
    var gold =  getBetterGold();
    if(gold)
    hero.move(gold.pos);
    
    summonTroops();
    commandTroops();
    
    var enemy = hero.findNearestEnemy();
    if(enemy && hero.distanceTo(enemy) < 20)
    hero.attack(enemy);
    
    
}
