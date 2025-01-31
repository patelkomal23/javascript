let p_name = "oli";
let p_qty = "2";
let p_price = "160";

let total = p_qty * p_price;
let discount = 0.1;
let disValue = discount * total;
let netValue = total - disValue; 


console.log("Product name:" ,p_name);
console.log("Product Qunatity:" ,p_qty);
console.log("Product Price:" ,p_price);
console.log("Total Ammount is:" ,total);
console.log("Discount:" ,disValue);
console.log("Final Price:" ,netValue)


