var strValue = 'aafc';
let char = '';

init(strValue, char);
function init(strValue, char) {
    debugger
    for (let i of strValue) {
        let value = this.strValue.split(i).length - 1
        if (value === 1) {
            char = i;
            break;
        } 
    }    
 console.log(`${char}`);

}

