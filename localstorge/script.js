let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let data = document.querySelector("#table tbody");
let update = document.getElementById('updt');
let gender = document.querySelectorAll("input[type='radio']");
let hobby = document.querySelectorAll("input[type='checkbox']");
let users=JSON.parse(localStorage.getItem("users")) || [];
let city=document.getElementById("city");

let edit = -1;

username.focus();
form.addEventListener('submit', (event) => {
    event.preventDefault();


    //gender
    let genderValue = '';
    if (gender[0].checked) {
        genderValue = gender[0].value;
        gender[0].checked = false;
    }
    else {
        genderValue = gender[1].value;
        gender[1].checked = false;

    }

    //hobby
    let hobbyArr = [];
    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            hobbyArr.push(hobby[i].value)

        }
        if (hobby[0].checked) {

            hobby[0].checked = false;
        }
        else {
            hobbyValue = hobby[1].value;
            hobby[1].checked = false;
    
        }
    }

    //city
    let cityValue = [];

    for (let i = 0; i < city.length; i++) {

      if (city[i].selected) {
        cityValue.push(city[i].value);
        

      }
    }    

    let obj = {
        username: username.value,
        email: email.value,
        password: password.value,
        gender: genderValue,
        hobby: hobbyArr,
        city: cityValue

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
    localStorage.setItem("users",JSON.stringify(users));
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
            <td>${obj.hobby.toString()}</td>  
            <td>${obj.gender}</td>
            <td>${obj.city}</td>
            <td>
         
        <button class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onclick="deleteData(${index})" >

        <i class="fas fa-trash-alt"></i> 
        </button>

        <button class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" onclick="editData(${index})">
        <i class="fas fa-edit"></i> 
        
        </button>

             </td>

            `
        data.append(row);

    })
}

let deleteData = (index) => {
    users.splice(index, 1);
    localStorage.setItem("users",JSON.stringify(users));

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