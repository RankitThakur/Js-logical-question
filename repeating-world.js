// How to find the highest repeating world from a given file 
let text = 'demotestdata';
let array = text.split('')
let count = 0;
let result;


console.group('test');

for(let i = 0; i < text.length; i++){  
    debugger;  
    count = 1;    
    for(let j = i+1; j < text.length; j++){    
        if(text[i] == text[j]){    
          result = count+1;    
        }     
    }    
}
console.groupEnd('test');

////not completed 


