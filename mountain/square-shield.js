// Incoming yeti attack! Use your paladins to form a square!
// Remember squares have equal-length sides!

function findByName(name, thangs) {
    for(var i = 0; i < thangs.length; i++) {
        var thang = thangs[i];
        if(thang.id == name) {
            return thang;
        }
    }
    return null;
}
var friends = hero.findFriends();
// Celadia is in the top left corner.
var celadia = findByName("Celadia", friends);
// Dedalia is in the top right corner.
var dedalia = findByName("Dedalia", friends);
var sideLength = celadia.distanceTo(dedalia);

// Illumina and Vaelia should finish forming a square!
var vaelia = findByName("Vaelia", friends);
var illumina = findByName("Illumina", friends);

// Command Vaelia to move to the bottom left corner of the square.
hero.command(vaelia, "move", {'x':celadia.pos.x,'y':celadia.pos.y -  sideLength });
// Command Illumina to move to the bottom left corner of the square.
hero.command(illumina, "move", {'x': dedalia.pos.x,'y': dedalia.pos.y-  sideLength});

