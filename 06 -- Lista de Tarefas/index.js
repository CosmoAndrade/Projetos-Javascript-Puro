
document.getElementById("btn").onclick = function (){
    var text_input = document.getElementById("input_tarefa").value;

    var new_task = `
    <div id="tarefas">

            <span> ${text_input} </span>
            <button id="deletar"  >Deletar</button>

    </div>
    `

     
        document.getElementById("novas_tarefas").innerHTML += new_task;

        var numero_tarefa = document.querySelectorAll("#deletar")

        for (let index = 0; index < numero_tarefa.length; index++) {
            numero_tarefa[index].onclick =  function (){
                this.parentNode.remove()
            }
            
        }



}


