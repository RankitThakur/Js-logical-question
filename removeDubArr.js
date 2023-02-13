// How do you remove duplicates from an array in place?

let array =  ["test", "test2", "test3", "test", "test4", "test"];
let newArray= [];
removeDubArray(array);
 function  removeDubArray(array) {
    debugger
    // array.forEach(element => {
    //     if(!newArray.includes(element)){
    //         debugger
    //         newArray.push(element);
    //     }
    // });

    array.map(element => {
        if(!newArray.includes(element)){
            debugger
            newArray.push(element);
        }
    });
    console.log(newArray);
 };   
 