let form=document.getElementById('form');
let firstname=document.getElementById('fname');
let lastname=document.getElementById('lname');
let email=document.getElementById('email');
let number=document.getElementById('enroll-num');
let course=document.getElementById('course');
let data=document.querySelector("#table tbody");
let subCourse=document.getElementById('sub-course');
let users=[];

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let obj={
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        number:number.value,
        course:course.value,
        subCourse:subCourse.value
    }
    users.push(obj);
    display();
})

let display=()=>{
    data.innerHTML='';
    users.map((obj,index)=>{
        let row = document.createElement('tr');
        row.innerHTML=
        `
        <td>${index+1}</td>
        <td>${obj.firstname}</td>
        `
        data.appendChild(row);

    })

}
display();