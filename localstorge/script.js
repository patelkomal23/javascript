let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let data = document.querySelector("#table tbody")
let users = [];
username.focus();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let obj = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    users.push(obj);
    username.value = " ";
    email.value = " ";
    password.value = " ";
    username.focus();
    display();
})
let display = () => {
    data.innerHTML = '';
    users.map((obj, index) => {
        let row = document.createElement('tr');

        row.innerHTML =
            `
            <td>${index + 1}</td>
            <td>${obj.username}</td>
            <td>${obj.email}</td>
            <td>${obj.password}</td>
        `
        data.append(row);

    })
}
display();