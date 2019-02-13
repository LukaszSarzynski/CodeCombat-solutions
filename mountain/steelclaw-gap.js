// This level introduces the % operator, also known as the modulo operator.
// a % b returns the remainder of a divided by b
// This can be used to wrap around to the beginning of an array when an index might be greater than the length

var defendPoints = [{"x": 35, "y": 63},{"x": 61, "y": 63},{"x": 32, "y": 26},{"x": 64, "y": 26}];

var summonTypes = ["soldier","soldier","soldier","soldier","archer","archer","archer","archer"];

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
        hero.command(friend, "defend", defendPoints[friendIndex %4]);
        // Command your minion to defend the defendPoint
        
    }
}

while(true) {
    summonTroops();
    commandTroops();
}
