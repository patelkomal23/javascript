// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// let str=' ';
// for(let i=1;i<=5;i++){
//    for(let j=1;j<=5;j++){
//     str += j + ' ';
      
//    }
//    str += "<br>"; 
// }
// document.write(str);

//41
//41  42
//41  42  43
//41  42  43  44
//41  42  43  44  45
let str = '', n = 41;
for (let i = 0; i <5; i++) {
    for (let j = 0; j <= i; j++) {
        str += (j + n) + ' ';  
    }
    str += "<br>";  
}
document.write(str);
