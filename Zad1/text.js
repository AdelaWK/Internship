/*
Stwórz metodę, która będzie odwracać kolejność słów w podanym ciągu wejściowym z zachowaniem miejsca występowania znaków nie-alfanumerycznych.
Przykład:
input: _Jeden..Dwa...Trzy;;;;Cztery_Pięć_
output: _Pięć..Cztery...Trzy;;;;Dwa_Jeden_
Funkcja powinna działać niezależnie od długości ciągu wejściowego.
Kod powinien być możliwy do uruchomienia z użyciem środowiska uruchomieniowego Node.js.
Nie można korzystać z dodatkowych bibliotek, czyli należy zastosować jedynie Vanilla JS.
*/

// test


//let stringIn = "_Jeden8..Dwa2...Trzy;;;;Cztery_Pięć";
let textIn = "";
let textOut = "";


for (i = 2; i < process.argv.length; i++) {     // if there is more than 1 word, concatenate strings
    textIn += " " + process.argv[i];
}

console.log("String in:  " + textIn);
textOut = myReverseString(textIn);

console.log("String out: " + textOut);


function myReverseString(stringIn) {

    let stringOut = "";

    let regex = /[\p{L}0-9]+/gu;                    // RegExp for all letters from every language and numbers
    let regexOpp = /[^\p{L}0-9]+/gu;                // RegExp for all non alphanumeric characters
    let regexFirstWord = /^[\p{L}0-9]/u;            // RegExp for first alphanumeric character 
    let regexFirstSign = /^[^\p{L}0-9]/u;           // RegExp for first non alphanumeric character

    let myArray = stringIn.match(regex);            // create an array with alphanumeric strings
    let myArrayOpp = stringIn.match(regexOpp);      // create an array with non alphanumeric strings

    let firstWord = regexFirstWord.test(stringIn);  // check if the first character is alphanumeric sign
    let firstSign = regexFirstSign.test(stringIn);  // check if the first character is non alphanumeric sign

    if (firstWord === true) {                       // if the first string is a word
        myArray.reverse();                          // reverse word order
        for (i = 0; i < myArray.length; i++) {
            stringOut += myArray[i];                // add the word
            if (myArrayOpp[i] != undefined) {       // add if there is still a string of signs
                stringOut += myArrayOpp[i];
            }
        }
    }
    else if (firstSign === true) {                  // if the first string is a string of signs
        if (myArray != null) {
            myArray.reverse();                      // reverse word order
        }
        for (i = 0; i < myArrayOpp.length; i++) {
            stringOut += myArrayOpp[i];             // add string of signs
            if ((myArray != null) && (myArray[i] != undefined)) {          // add if there is still a word
                stringOut += myArray[i];
            }
        }
    }
    else {
        console.log("myReverseString: String is empty.");  // if there is no sign
    }
    return (stringOut);
}






