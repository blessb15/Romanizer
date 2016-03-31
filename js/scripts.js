//business

var cryptoCode = function(sentence) {

  var sentenceArray = sentence.split(" ");

  var punctuation = [".", ",", "-", "?", "'", "!"];

  var newSentence = [];

  for (i = 0; i < sentenceArray.length; i++){
    var wordArray = sentenceArray[i].split("");

    for (j = 0; j < wordArray.length; j++) {

      for(k = 0; k < punctuation.length; k++) {
        if(wordArray[j]===punctuation[k]){
          delete(wordArray[j]);
        }
      }
      if (wordArray[j] != undefined){
        newSentence.push(wordArray[j]);
      }
    }
  }

var codeSquare = [];

var squareMeasurements = Math.ceil(Math.sqrt(newSentence.length));
var newSentence = newSentence.reverse();
for(i = 0; i <= squareMeasurements; i++) {

  var row = newSentence.splice(-squareMeasurements).reverse();

  if (i === squareMeasurements && row.length < squareMeasurements) {
    row.push(" ");
  }

  codeSquare.push(row);
}

console.log(codeSquare);
var letters = [];

for(index = 0; index < (codeSquare[index].length - 1); index++) {

  for(j = 0; j < codeSquare[j].length; j++) {

    for(k = 0; k < (codeSquare[j].length - 1); k++){

      if (index === k) {
        letters.push(codeSquare[j][k]);

      }
    }
  }
}

console.log(letters);
// codeSquare.join("[]")

// for(i = 0; i < codeSquare.length; i++) {
//   for(j = 0; j < codeSquare[j].length; j++) {
//     for(k = 1; k < 2; k++) {
//     var letter = codeSquare[j].splice(j,k);
//       Letters.push(letter);
//     }
//   }
// }


};










//user
$(document).ready(function(){
$("form").submit(function(event){
event.preventDefault();
var sentence = $("input#words").val();
cryptoCode(sentence);
});
});
