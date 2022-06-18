var btn = document.getElementById('btn')

var tema = false



function mudarCorDeFundo (){
    if(tema == false){
        tema = true
        document.body.style.background = "white"
        btn.style.background = "blue"
        btn.style.color = "white"
    }else{
        tema = false
        document.body.style.background = "blue"
        btn.style.background = "white"
        btn.style.color = "blue"
    }
}