let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let grid = document.getElementById("grid");
let form = document.getElementById("form");
let data = document.querySelector("#table tbody")
let users = [];
let btn = document.getElementById("btn");
let editid = -1
firstname.focus();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let obj = {
        firstname: firstname.value,
        lastname: lastname.value,
        grid: grid.value,
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
    firstname.value = " ";
    lastname.value = " ";
    grid.value = " ";
    firstname.focus();
    display();
})
let display = () => {
    data.innerHTML = '';
    users.map((obj, index) => {
        let row = document.createElement('tr');

        row.innerHTML =
            `
            <td>${index + 1}</td>
            <td>${obj.firstname}</td>
            <td>${obj.lastname}</td>
            <td>${obj.grid}</td>
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
    firstname.value = user.firstname;
    lastname.value = user.lastname;
    grid.value = user.grid;

    btn.innerText = "Update";
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
    editid=index;



}
display();