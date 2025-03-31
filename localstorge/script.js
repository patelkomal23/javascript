let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let data = document.querySelector("#table tbody");
let update = document.getElementById('updt');
let gender = document.querySelectorAll("input[type='radio']")
let hobby = document.querySelectorAll("input[type='checkbox']")

let edit = -1;
let users = [];
username.focus();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //gender
    let genderValue = '';
    if (gender[0].checked) {
        genderValue = gender[0].value;
    }
    else {
        genderValue = gender[1].value;
    }

    //hobby
    let hobbyArr = [];
    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            hobbyArr.push(hobby[i].value)

        }
    }

    let obj = {
        username: username.value,
        email: email.value,
        password: password.value,
        gender: genderValue,
        hobby: hobbyArr
    }
    if (edit == -1) {
        users.push(obj);
    }
    else {
        users[edit] = obj;
        edit = -1;

        update.innerText = "Submit";
        update.classList.remove('btn-primary');
        update.classList.add('btn-info');

    }
    username.value = " ";
    email.value = " ";
    password.value = " ";
    gender.value = " ";
    hobby.value = " ";
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
            <button class="btn btn-danger" onclick="deleteData(${index})">Delete</button>
            <button class="btn btn-warning" onclick="editData(${index})">Edit</button>
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
    username.focus();
    let user = users.filter((_, idx) => idx == index)[0];

    username.value = user.username;
    email.value = user.email;
    password.value = user.password;

    update.innerText = "Update";
    update.classList.remove('btn-info');
    update.classList.add('btn-primary');
    edit = index;
}
display();