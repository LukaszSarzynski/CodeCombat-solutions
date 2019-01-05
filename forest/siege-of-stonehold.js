// Help your friends beat the minions that Thoktar sends against you.
// You'll need great equipment and strategy to win.
// Flags might help, but it's up to you–be creative!
// There is a doctor behind the fence. Move to the X to get healed!
while(true) {
    if(hero.health < 100)
    {
        hero.moveXY(19, 68);
    }
    var flag = hero.findFlag();
    if(flag)
    {
        hero.moveXY(flag.pos.x, flag.pos.y);
        var enemy = hero.findNearestEnemy();
        if(enemy)
        {
            hero.attack(enemy);
        }
    }
}
