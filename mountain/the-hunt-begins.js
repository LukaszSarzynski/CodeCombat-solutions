// Senick is trying to find the elusive Burleous Majoris!
// But he doesn't know how big a Burleous Majoris would be...
// Find the average size of this burl population to use as a baseline!

// This function returns average size of all the burls in an array.
function averageSize(burls) {
    var sum = sumSize(burls);
    // Remember the average is the sum of the parts divided by the amount!
    return sum / burls.length;
}

// This function should return the sum of all the burls sizes.
function sumSize(burls) {
    var iSum = 0;
    // Implement the sum function using the burls 'size':
    for(var i=0; i<burls.length; i++)
    {
        iSum += burls[i].size;
    }
    return iSum;
}

while(true) {
    // Find the average size of the burls by calling the 'averageSize' function.
    // Say the average size of the seen burls!
    hero.say(averageSize(hero.findEnemies()));
}
