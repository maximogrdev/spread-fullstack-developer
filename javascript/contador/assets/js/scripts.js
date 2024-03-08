let res = document.querySelector("#res")
let res2 = 0



function decrementar(){
    res2 = res2 - 1;
    res.innerHTML = res2
    if(res2 < 0){
        res.style.color = "red"
    }
    if(res2 <= 5){
        document.body.style.backgroundColor = "aqua"
    }
    if(res2 > 5 && res2 <= 10){
        document.body.style.backgroundColor = "yellow"
    }
 

}

function incrementar(){
  res2 = res2 +1
  res.innerHTML = res2
  if(res2 >= 0){
    res.style.color = "blue"
  }
  if(res2 > 5){
    document.body.style.backgroundColor = "yellow"
  }
  if(res2 > 10){
    document.body.style.backgroundColor = "pink"
  }
 
 
 }