

var usuario = "codar@gmail.com";
var password = "123456";



function checkLogin(){

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (usuario == email && password == senha){
        document.location.href = "login.html"
    }else{
        alert("Usuários ou senha inválidos")
        document.getElementById("forget").style.display = "flex"
    }

}