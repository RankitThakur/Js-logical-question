// // How do you find all the permutations of a string

let str = '1';
const permutationCheck = (str) => {
   if (str.length && str.length < 2 ){
    debugger
      return str
   }
   const tempArr = [];
   for (let i = 0; i < str.length; i++){
      let char = str[i]
      if (char != i){
         let remainder = str.slice(0, i) + str.slice(i + 1, str.length)
         
         for (let permutation of permutationCheck(remainder)){
            tempArr.push(char + permutation)
         }
      }
   }
   return tempArr
}
console.log(permutationCheck(str));
