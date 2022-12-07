function isValidWalk(walk) {
 if (walk.length == 10) {
    //check if returning to the starting point
 let x = 0; let y = 0;
 walk.forEach(direction => {
    if (direction =='n') {
        y = y +1; 
    } else if (direction =='s') {
        y= y-1;
    } else if (direction == 'w'){
        x = x-1;
    } else if (direction == 'e'){
        x= x+ 1;
    }
     
 }); 
 if (x == 0 && y== 0) { 
    return true; 
 } else {return false}
 } else { return false}
  
    
    //insert brilliant code here
  }