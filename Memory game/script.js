
var cards=[
    {name:"yel",image:"yel.png"},
    {name:"eye",image:"eye.png"},
    {name:"au",image:"au.png"},
    {name:"eye",image:"eye.png"},
    {name:"yel",image:"yel.png"},
    {name:"au",image:"au.png"}
]

for(var i=0;i<6;i++){
    const card=document.createElement("img")
    card.setAttribute("src","black.png");    
    card.setAttribute("id",i);    
    document.getElementById("grid").appendChild(card);
    card.addEventListener("click",flipcard);
}

var clickedimages=[];
var cardsid=[]
function flipcard(){
  var id=this.getAttribute("id");
  this.setAttribute("src",cards[id]["image"])
  clickedimages.push(cards[id]["name"]);
  cardsid.push(id);
  console.log(clickedimages,cardsid);
  if(clickedimages.length==2){
    compare()
  }
}

function compare(){
    
    if(clickedimages[0]==clickedimages[1]){ 
        document.getElementById("counter").innerHTML=document.getElementById("counter").innerHTML+1
        alert("match")
        console.log(cardsid);
        document.getElementById(cardsid[0]).src="white.png"
        document.getElementById(cardsid[1]).src="white.png"
        document.getElementById(cardsid[0]).removeEventListener("click",flipcard);
        document.getElementById(cardsid[1]).removeEventListener("click",flipcard);
        
    }
    else{
        document.getElementById(cardsid[0]).src="black.png"
        document.getElementById(cardsid[1]).src="black.png"
    }
    clickedimages=[]
        cardsid=[]
}