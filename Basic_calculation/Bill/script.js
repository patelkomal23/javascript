let p_name = "oli";
let p_qty =1;
let p_price = 900;

let total = p_qty * p_price;
let discount = total >= 1500 ? 0.15 :
              total >= 1000 ? 0.10 :
              total >= 800 ? 0.08 :
              0;

let disValue = discount * total;
let netValue = total - disValue; 
              

console.log("Product name:" ,p_name);
console.log("Product Qunatity:" ,p_qty);
console.log("Product Price:" ,p_price);
console.log("Total Ammount is:" ,total);
console.log("Discount:" ,disValue);
console.log("Final Price:" ,netValue)
