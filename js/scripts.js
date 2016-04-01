//business



var romConvert = function(num) {
  var numberArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  var numerals = ["I", "IV", "V", "IX", "X", "XL", "L", "LC", "C", "CD", "D", "CM", "M"];

  var resultArray = [];



  while(num > 0) {

    for(i = 0; i < numberArray.length; i++) {
      if (numberArray[i] <= num && numberArray[i+1] > num) {
        resultArray.push(numerals[i]);
        num -= numberArray[i];
      }
    }

  }

  console.log(resultArray.join(""));


};






//user
$(document).ready(function(){
$("form").submit(function(event){
event.preventDefault();
var userInput = $("input#num").val();
romConvert(userInput);

});
});
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
