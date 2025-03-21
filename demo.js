/* 
 - IN const we can't reassine the  variable and value  but we can update varable  value.
- Loop ke time pe autoSave of karna Hang hojayaga warna.

var a = [1,2,3,4,5]
consol.log(a.slice(0,3)) // (indexNo, kitne Member Nikalna hai)

 */



// let num = 1
// let sum = 0
// while (num <=10) {
//  sum = sum + num
//  num ++;
    
// }
// console.log(sum);


// let str = "deepak"
// for (const char of str) {
//     console.log(char);
    
// }

// for (let index = 0; index <= 20; index++) {
//     index % 2 !== 0 ? console.log(index) : null;
// }

//  let fact = 1
// for(let i =5 ; i>0; i--){
//    fact = fact * i
//    console.log(fact);
   
// }
// console.log(fact);


let obj = {
    name: "Deepak",
    age: 32
}
for (const key in obj) {
    console.log(obj.name);
    
}




    
