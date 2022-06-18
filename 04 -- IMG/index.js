var number_img = 1

function handleImgAdd(){
    var img = document.getElementById("img")

   if(number_img < 3){
    number_img += 1
   }else{
    number_img = 3
   }

    img.src = `assets/img${number_img}.png`
}


function handleImgSub(){
    var img = document.getElementById("img")

   if(number_img > 1){
    number_img -= 1
   }else{
    number_img = 1
   }

    img.src = `assets/img${number_img}.png`
}