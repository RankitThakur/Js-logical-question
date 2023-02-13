// How do you check if two rectangles overlap with each other

let array1 = [0,0,2,2]
let array2 = [2,2,3,3]
checkOverlap(array1, array2);
function checkOverlap(array1, array2){
    debugger
    if(array1[0]==array2[0] || array1[1]==array2[1] || array1[2]==array2[2] || array1[3]==array2[3] ){
        return false;
    }

    if(array1[0]> array2[0] || array1[1]>array2[1]) {
        return false;
    }

    if(array1[3]> array2[3] || array1[2]>array2[2]) {
        return false;
    }
    return true;
}

if(checkOverlap(array1, array2)){
    console.log("Rectangles Overlap");
}

else{
    console.log('not overLap');
}