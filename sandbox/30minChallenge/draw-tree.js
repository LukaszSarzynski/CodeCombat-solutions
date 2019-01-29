// Challange Topic
// create functio which draw tree in console, 
// required params: width and height of tree, and height of trunk



function drawTree(iHeight, iWidht, iTrunkHeight) {
    const cMark = "#";
    const cEmpty = "*";

    const iCenter = Math.floor(iWidht/2) + 1;
    const iLevelAdd = iWidht/iHeight;

    let iLevelStep = iCenter;
    let fLevelNextSteep = iCenter;

    let iLineTreeStart = iCenter;
    let iLineTreeEnd = iCenter;

    
    // draw green
    for(let iGroving = 0; iGroving < iHeight; iGroving++){
        // add progres for tree
        fLevelNextSteep += iLevelAdd;

        // reacts only if progres is balanced
        if(fLevelNextSteep >= iLevelStep +2) {
            iLineTreeStart = iCenter - Math.floor( (fLevelNextSteep -iCenter) / 2 );
            iLineTreeEnd = iCenter + Math.floor( (fLevelNextSteep -iCenter)/ 2);
        }
        
       // drawing line on actual tree level
       let sLine = '';
       for (let iLinePos = 0; iLinePos < iWidht +2; iLinePos++) {
           if (iLinePos >= iLineTreeStart &&  iLinePos <= iLineTreeEnd) {
               sLine += cMark;
           } else {
               sLine += cEmpty;
           }
       }
       console.log(sLine);        
    }
    // draw Trunk
    for (let iTrunkLevel = 0; iTrunkLevel < iTrunkHeight; iTrunkLevel ++) {
        console.log(cEmpty.repeat(iCenter) + '|' + cEmpty.repeat(iCenter ));        
    }
 
}

// exaple answer

drawTree(10, 15, 2)
//return 
/*
********#********
*******###*******
******#####******
*****#######*****
*****#######*****
****#########****
***###########***
**#############**
**#############**
*###############*
********|********
********|********
*/