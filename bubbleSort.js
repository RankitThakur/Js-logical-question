let array = [5,4,3,5,3,2,1]
let test = document.getElementById("test");
bubbleSort(array);
function bubbleSort(array) {
    debugger
    for(let i=array.length; i>0; i--){
        for(let j=0; j<i; j++){
            ///
            if(array[j]> array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
            console.log(j)
        }
    }
    test.innerText =  array
}




































