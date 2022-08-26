function isPalindrome(word) { 

  word = word.replace(/ /g,"").toLowerCase();
  var compareWord = word.split("").reverse().join("");

  if (compareWord === word) {
    return true;
  } 
  else {
    return false;
  } 

}
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
