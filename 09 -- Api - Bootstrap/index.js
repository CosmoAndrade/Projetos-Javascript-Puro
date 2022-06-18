const api = "https://digimon-api.vercel.app/api/digimon";

window.onload = function(){

    var filter = "Rookie"

    fetch(api)
    .then(data => data.json())
    .then(data => {
        for (let index = 0; index < data.length; index++) {
           
            var digimon = `

            <div class="card" style="width: 18rem;">

            <img src="${data[index].img}" class="card-img-top" >

            <div class="card-body ">

              <h5 class="card-title bg-primary text-center text-white">${data[index].level}</h5>

              <p class="card-text bg-success  text-white text-center" > ${data[index].name} </p>
             
            </div>
            
          </div>
            
            
            
            `

          if (data[index].level == filter){
            document.getElementById("digimons").innerHTML += digimon;
          }
            
        }
    })

}