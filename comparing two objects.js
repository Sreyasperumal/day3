const obj1 ={
    name : "sreyas",
    age : 26,
    height:6
};
const obj2 ={
    height:6,
    age : 26,
    name : "sreyas"
   
};

    const obj1KeysTemp = Object.keys(obj1);
    const obj2KeysTemp = Object.keys(obj2);
 function solve(obj1Keys, obj2Keys) {
    if(obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            if(typeof obj1[objKey] == "object" && typeof obj2[objKey] == "object") {
                if(!isEqual(obj1[objKey], obj2[objKey])) {
                    return false;
                }
            } 
            else {
                return false;
            }
        }
    }
 return true;
}
let x=(solve(obj1KeysTemp,obj2KeysTemp));
console.log(x)
