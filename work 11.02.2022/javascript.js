var scores = [60, 50, 60, 58, 54, 54, 
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

 var conclusion;
 var highestTest = 0;

for (var i = 0; i < scores.length; i++) {
     conclusion = ("Bubble solution # " + i + " score: " + scores[i] );        
     console.log(conclusion);
     if (scores[i] > highestTest){
         highestTest = scores[i];

     }
}   
  console.log("Bubbles tests: " + scores.length);         
  console.log("Highest bubble score: " + highestTest);
  var highestScoringPosition = [];
  for (i = 0; i < scores.length; i++) {
        if (scores[i] == highestTest) {
        highestScoringPosition.push(i); 
   }

  }
    console.log("Solutions with highest score: " + highestScoringPosition);
