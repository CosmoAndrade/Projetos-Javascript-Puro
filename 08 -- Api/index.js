const api = "https://digimon-api.vercel.app/api/digimon";

window.onload = function(){

    var filter = "Rookie"

    fetch(api)
    .then(data => data.json())
    .then(data => {
        for (let index = 0; index < data.length; index++) {
           
            var digimon = `
            
            <div id="digimon">

                <img src="${data[index].img}" >
                <p class="level" >${data[index].level}</p>
                <hr/>
                <p>${data[index].name}</p>

            </div>
            
            
            `

          if (data[index].level == filter){
            document.getElementById("digimons").innerHTML += digimon;
          }
            
        }
    })

}