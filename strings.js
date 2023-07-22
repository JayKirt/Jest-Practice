// function to reverse a string

function reverseThisWord (word) {
  const reversedWord =  word.split("").reverse().join("") 
  console.log (reversedWord)
}
reverseThisWord ("hello")


//Capitalise the first letter
function correctCapitals (badEnglish) {
    console.log (badEnglish.charAt(0).toUpperCase() + badEnglish.slice(1));
}
correctCapitals ("hey there") 
    

//Vowel counter
function vowelCounter(vowelWord) {
    let lowerCaseVowel = vowelWord.toLowerCase();
    let result = 0;
  
    for (let i = 0; i < lowerCaseVowel.length; i++) {
      if (
        lowerCaseVowel[i] === "a" ||
        lowerCaseVowel[i] === "e" ||
        lowerCaseVowel[i] === "i" ||
        lowerCaseVowel[i] === "o" ||
        lowerCaseVowel[i] === "u"
      ) {
        result++;
      }
    }
  
    console.log(result);
  }
vowelCounter ("EatAbiGFishNow")