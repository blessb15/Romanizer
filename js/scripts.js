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
