//calculate the square root of a given number
let num  = 25;
// init(num2);
sqroot(num);
// sqrt(num);
// function init(num) {
//     debugger
//     let result = 0
//     if(num==0 || num==NaN){
//         debugger
//         return num;
//     }
//     for(i=1; i<=num; i++){
//         result = i*i;
//     }
//     document.write(`the square of a ${num} number is ${result}`)

// }


// function sqrt(num) {
//     debugger
//     let value = 0;
//     let result = 1;
//     if (num == 0 || num == 1){
//         return x;
//     }     
//     while (result <= num)
//     {
//         value++;
//         result = value * i;

//     }
//     document.write(`the square root of a ${num} number is ${result}`)

// }

function sqroot(num) {
    let result = 0;
    debugger
    if (num < 0){
    return;
    }
    else {
      result =  num**0.5

    }
    document.write(`the square root of a ${num} number is ${result}`);
}

// function sqroot(num) {
//     // Specify the for loop
//     for (let i =0; i<x; i++) {
//         x = (x + value / x) / 2.0;
//     }    document.write(`the square root of a ${num} number is ${result}`);
// }
  
  
