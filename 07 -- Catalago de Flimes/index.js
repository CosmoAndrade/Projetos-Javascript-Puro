var lista_de_filmes = [
    {
        nome: "X-Men: Dias de um Futuro Esquecido",
        img: "https://i.pinimg.com/564x/39/b1/e2/39b1e25ff4d10111ce777fa8f0fb35c4.jpg",
        trailer: "https://www.youtube.com/watch?v=w1dIkYegWuQ",
    },

    {
        nome: "Vingadores: Guerra Infinita",
        img: "https://i.pinimg.com/564x/08/fd/cd/08fdcdb10d3ea186369665e683ae7deb.jpg",
        trailer: "https://www.youtube.com/watch?v=t_ULBP6V9bg",
    },

    {
        nome: "Mulan",
        img: "https://i.pinimg.com/564x/e8/95/ed/e895ed3897057787ccffd43a13309135.jpg",
        trailer: "https://www.youtube.com/watch?v=AD5cvVk-4Ps",
    },
]




window.onload = function () {

    for (let index = 0; index < lista_de_filmes.length; index++) {
        var filme = `

    
        <a href="${lista_de_filmes[index].trailer}" >
    
                
            <div id="movie">
               
    
                <img src="${lista_de_filmes[index].img}" alt="">

                <p>${lista_de_filmes[index].nome}</p>
    
            </div>
    
    
    
    
        </a>
    
        
        
        `
        document.getElementById("movies").innerHTML += filme;
        
    }
    

   
}