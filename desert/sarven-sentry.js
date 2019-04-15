// Use different colored flags to perform different tasks.

while(true) {
    var flag= hero.findFlag();    
    // If there's a flagGreen...   
        // Build a "fence" at flagGreen's position.
       // Pick up the flag!
    // If there's a flagBlack...
        // Build a "fire-trap" at flagBlack's position.
        // Pick up the flag!
        if(flag)  {
            if(flag.color == "green"){
                hero.buildXY("fence", flag.pos.x, flag.pos.y);
            }
            else if(flag.color == "black"){
                hero.buildXY("fire-trap", flag.pos.x, flag.pos.y);
            }

            hero.pickUpFlag(flag);
              
          }        
        
    // Move back to the center.
    hero.moveXY(43, 31);
}
