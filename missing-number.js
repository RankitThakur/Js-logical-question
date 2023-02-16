// How do you find the missing number in a given integer array of 1 to 100? (solution)

let arr = [ 1,3,4,5,6,7,9,10];
let arrLan = arr.length;
findMissing(arr, arrLan);


function findMissing(arr, arrLan){
    debugger
for(let i = 1; i < arrLan; i++) { 
    if (! arr.includes(i)) { 
        console.log('Missing integer', i++); 
    } 
  } 
}

// function findMissing(arr,arrLan){
//     debugger
//     let temp = [];
//     for (i = 0; i <= arrLan; i++) {
//         temp[i] = 0;
//     }
   
//     for (i = 0; i < arrLan; i++) {
//         temp[arr[i] - 1] = 1;
//     }
   
//     let ans = 0;
//     for (i = 0; i <= arrLan; i++) {
//         if (temp[i] == 0)
//      ans = i + 1;
//      console.log(ans);

//     }}
  
