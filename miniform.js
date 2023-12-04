function displayUserInfo() {
    var fname = document.getElementById("fname").value;
    var sex = document.getElementById("sex").value;
    var bdate = document.getElementById("bdate").value;
    var age = document.getElementById("age").value;
    var pnumber = document.getElementById("pnumber").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    console.log("Name: " + fname);
    console.log("Sex: " + sex);
    console.log("Birthdate: " + bdate);
    console.log("Age: " + age);
    console.log("Phone Number: " + pnumber);
    console.log("Email: " + email);
    console.log("Permanent Address: " + address);
}