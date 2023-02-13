// How do you count the occurrence of a given character in a string? (solution)
let string = 'abccdefgaa';
let char = 'c';
document.getElementById('text').innerText  = `input: ${string}`;
let test = document.getElementById('res');
init(string, char);
function init(string, char){
    debugger;
    let res = 0;
    for(i=0; i<string.length; i++){
        if(string.charAt(i)==char){
          res++;
        }
    }
    console.log(res);
    test.innerText = `Output: ${char} value is ==> ${res}`;
};

