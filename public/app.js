function hello(){
function fetchData(){
    fetch("https://assignment-machstatz.herokuapp.com/planet")
    .then(r => r.json())
    .then(pass)
}

fetchData()

function pass(data){
    //console.log(data)
    var ans=[]
    for(var i in data){
            document.getElementsByName(data[i].id).forEach((s)=>{
                if(s.checked==true){
                    if(s.value=="Favourite"){
                ans.push(s.name)

                data[i]["isFavourite"]=s.checked
            }
            }})
             }
//console.log(ans)
console.log(data)

let tc= document.getElementsByClassName("tabcontent");

for (var i = 0; i < tc.length; i++) {
    tc[i].style.display = "none";
    }

let tl = document.getElementsByClassName("tab");

for (var i = 0; i < tl.length; i++){
    tl[i].style.backgroundColor = "";
}
document.getElementById("Favouritelist").style.display="block";
document.getElementById("fl").textContent=ans

if(ans.length===0){
    pl()
    alert("There is no Favourite in the list")
    alert("PLease choose any one of the planet as you Favourite")
}
}

}

function pl(){

    let tc=document.getElementsByClassName("tabcontent")
    
  for (var i = 0; i < tc.length; i++) {
    tc[i].style.display = "none";
  }

  let tl = document.getElementsByClassName("tab");
  
  for (var i = 0; i < tl.length; i++) {
    tl[i].style.backgroundColor = "";
}

document.getElementById("planetlist").style.display= "block";
//tc.style.backgroundColor = red;
}   