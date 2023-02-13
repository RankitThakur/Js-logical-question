// How do you count a number of vowels and consonants in a given string

let value = 'rankit';

init(value);
function init(value) {
    debugger
    let VowRes = 0
    let conRes = 0
    for(i=0; i<value.length; i++){
        if(value[i]=='a' || value[i]=='i' || value[i]=='o' || value[i]=='u' || value[i]=='e'){
          VowRes++
        }
        else {
            conRes++
        }
    }
    document.write(`total vowels===> ${VowRes} and total consonants===> ${conRes}` )
}