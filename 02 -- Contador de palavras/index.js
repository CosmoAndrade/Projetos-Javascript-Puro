
function calcular(){
    var text = document.getElementById("textarea").value;
    var result = text.split(" ").length;
    var qtd = text.length;


    document.getElementById("resultado").innerHTML = ` Você tem ${result} palavras`;

    document.getElementById("letras").innerHTML = ` Você tem ${qtd} caracteres`;
}