let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let gender = document.querySelectorAll("input[name='gender']");
let hobby = document.querySelectorAll("input[name='hobby']");

let form = document.getElementById("form");
let data = document.querySelector("#table tbody")
let users = [];
let btn = document.getElementById("btn");
let editid = -1
username.focus();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let obj = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    if (editid == -1) {
        users.push(obj);
    }
    else {
         users[editid] =obj ;
         editid =-1

         btn.innerText = "submit";
         btn.classList.add('btn-secondary');
         btn.classList.remove('btn-primary');
    }
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
            <td>${obj.gender}</td>
            <td>${obj.hobby}</td>
            <td>
            <button class="btn btn-danger " onclick="deleteData(${index})">Delete</button>
            <button class="btn btn-warning"  onclick="editData(${index})">Edit</button>
            </td>
        `
        data.append(row);

    })
}
let deleteData = (index) => {
    users.splice(index, 1);
    display();
}
let editData = (index) => {
    let user = users.filter((_, idx) => idx == index)[0];
    username.value = user.username;
    email.value = user.email;
    password.value = user.password;

    btn.innerText = "Update";
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
    editid=index;



}
display();