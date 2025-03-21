$(document).ready(function(){
    $("#myform").validate({
        rules: {
            name:{
                required:true,
            },
            email:{
                required:true,
            },
            password:{
                required:true,
            }
        },
        messages:{
            name:{
                 required: "Please enter your name"
            },
            email:{
                 required: "Please enter your email"
            },
            password:{
                 required: "Please enter your password"
            }
        },
        submitHandler: function (form) {
            alert("Form submitted successfully!");
            form.submit();
        }
    })
})