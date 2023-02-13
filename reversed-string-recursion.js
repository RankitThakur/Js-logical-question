
let str = 'demoTest';
let strLen =  0
reverse(str, strLen);
function reverse(str, strLen) {
    debugger;
    if (strLen == str.length) {
        return;
    }
    reverse(str, strLen + 1);
    console.log(str[strLen]);
}
