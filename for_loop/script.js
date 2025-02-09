
// let str= ' ';
// for(let i=1;i<=5;i++){
//     str += i + ' ,';
// }

// console.log(str);

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
    
// }

let i=1;
do{
    console.log(i);
    i++;
    
}while(i<=5);



function generatePattern(rows) {
    let currentNumber = 1;
  
    // Outer loop for each row
    for (let  i = 1; i <= rows; i++) {
        let row = [];
        
        // Inner loop for each number in the row
        for (let j = 1; j <= i; j++) {
            row.push(currentNumber);
            currentNumber += i + j - 1; // Increase number for the next one in the sequence
        }
        
        console.log(row.join(" ")); // Print the row as a space-separated string
    }
}

generatePattern(5); // Call the function with 5 rows
