
//The first tactic without equipment (max postion is #1595 of 28452 Red Team)
// Focusing on a better currency, the ability to find only one coin from equipment, 
// so need is use funny steps inside.
// min stuff: 
//  - moveXY [ex: leather boots]
//  - findNearestItem [ex: wooden glasses]

function goaway()
{
    //ToDo
             //for x
            if(hero.pos.x > 55  )
            deltaX = -8;
            else if(hero.pos.x < 25  )
            deltaX = +9;
            
            //for y
             if( hero.pos.y > 40 )
            deltaY = -9;
            else if( hero.pos.y < 25 )
            deltaY = +8;
            
            //hero.say(deltaX + "#" + deltaY + "x "+hero.pos.x+ "y "+hero.pos.y);
            //aa
            go(hero.pos.x +deltaX, hero.pos.y +deltaY);
}

function go(hx,hy)
{
    hero.moveXY(hx, hy);
}

var bronze  = 0;
var deltaX = -10;
var deltaY = -10;

var lastHelth = hero.maxHealth;


while(true) {

    var enemy = hero.findNearestEnemy();
    //if enemy start atack me
    if((lastHelth  -10 > hero.health) && enemy )
    {
        hero.attack(enemy);
        lastHelth = hero.health;
    }
    
    var item = hero.findNearestItem();
    if (item)
    {
        //get better value first
        if(item.value > 1)
        {
            go(item.pos.x, item.pos.y);
        }
        // if nothing itrestig broze is good for start
        else if (bronze < 20)
        {
            go(item.pos.x, item.pos.y);
            bronze += 1;
        }
        //if is near is good too 
        else if(hero.distanceTo(item) < 7)
        {
            go(item.pos.x, item.pos.y);
        }
        else {  
            //if nothign go somewhere
            goaway();
    
        }
        
    }
    else{
        //no item near so go somewhere
        goaway();
    }
    
    
}
