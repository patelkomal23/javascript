const products =JSON.parse(localStorage.getItem('Products')) || [];
const cart = JSON.parse(localStorage.getItem('Cart')) || [];

let form = document.getElementById('form');
let p_name = document.getElementById('p_name');
let price = document.getElementById('price');
let showData = document.querySelector('#table tbody');



p_name.focus();

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let obj={
        p_name:p_name.value,
        price:price.value

    }
    products.push(obj);
    console.log(products);
    p_name.value='',
    price.value=''
    p_name.focus();
    localStorage.setItem('Products', JSON.stringify(products));
    display();
 
})
const display = () => {
    showData.innerHTML = '';

    products.forEach((product, index) => {
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.p_name}</td>
            <td>${product.price}</td>
            <td>
                <button onClick="addToCart(${index})" class="btn btn-primary">Add to Cart</button>
            </td>
        `;
        showData.appendChild(row);
    });
}

display();
const addToCart = (index) => {
    const product = products[index];
    cart.push(product);
    localStorage.setItem('Cart', JSON.stringify(cart));
    console.log("Cart:", cart);
}
alert(`${product.p_name} added to cart!`);

