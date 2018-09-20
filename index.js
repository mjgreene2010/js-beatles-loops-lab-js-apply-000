// add solution here


function theBeatlesPlay(musicians, instruments) {
  var a = [];
  for (var i = 0; i < musicians.length; i++) {
  a.push(musicians[i] + " plays " + instruments[i])
}
return a;
}

function johnLennonFacts(facts) {
  var b = 0;
  var a = [];
  while (b < facts.length) {  
    a.push(facts[b] + "!!!");
    b++;
  }  
  return a
}

function doWhileLoop(array) {
  
   do { array.shift()
  
  } while (array.length > 0 /**&& incrementVariable()*/)
  
 return array

}

  

  

