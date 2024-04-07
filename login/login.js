function LoginProceed(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var check=document.getElementById('checkbox').checked;
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;

    if (email.trim() && password.trim() && check && name.trim() && lastname.trim()) {
        window.location.href = "../index.html";

        localStorage.setItem('storedEmail', email);
        localStorage.setItem('storedPassword', password);
        localStorage.setItem('storedName',name);
        localStorage.setItem('storedLast',last);

    } else {
        alert("You must fill all information fields!");
    }
}