let ename = document.getElementById("ename");
let department = document.getElementById("department");
let salary = document.getElementById("salary");
let form = document.getElementById("form");
let data = document.querySelector("#table tbody")
let users = [];
let btn = document.getElementById("btn");
let editid = -1
ename.focus();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let obj = {
        ename: ename.value,
        department: department.value,
        salary: salary.value,
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
    ename.value = " ";
    department.value = " ";
    salary.value = " ";
    ename.focus();
    display();
})
let display = () => {
    data.innerHTML = '';
    users.map((obj, index) => {
        let row = document.createElement('tr');

        row.innerHTML =
            `
            <td>${index + 1}</td>
            <td>${obj.ename}</td>
            <td>${obj.department}</td>
            <td>${obj.salary}</td>
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
    ename.value = user.ename;
    department.value = user.department;
    salary.value = user.salary;

    btn.innerText = "Update";
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
    editid=index;



}
display();