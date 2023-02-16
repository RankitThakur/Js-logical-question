// How do you check if two strings are anagrams of each other?

let str1 = 'test';
let str2 = 'test';

test(str1, str2)

function test(str1, str2){ 
  let temp = str1.split('').sort().join().toUpperCase();
  let temp2 = str2.split('').sort().join().toUpperCase();
   let result =  temp.includes(temp2);
   if(temp==temp2){
    console.log('yes');
   }
   if(temp != temp2 )
   {
    console.log('no');
   }
   console.log(result)
}

// function test2(str1, str2){
//     debugger;
//     let temp1 = str1.sort();
//     let temp2 = str2.sort();
//     if(temp1.length != temp2.length){
//         console.log('no anagrams');
//         return
//     }
//     for (i = 0; i < temp1.length; i++) {
//     if (temp1[i] !== temp2[i]) 
//         console.log('no anagrams');
//     }
//     console.log('anagrams');
// }
