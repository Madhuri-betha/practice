const compDisplay=document.getElementById("comp");
const userDisplay=document.getElementById("user");
const resultDisplay=document.getElementById("result")
const possibilities=document.querySelectorAll("button")

let userChoice,computerChoice,resultChoice;

possibilities.forEach(p=>p.addEventListener('click',(e)=>{
    console.log("fghjn");
    userChoice=e.target.id;
    userDisplay.innerHTML=userChoice
    computerChoiceGenerate()
    result()
}))

function computerChoiceGenerate(){
    let num=Math.floor(Math.random()*3)
    if(num==0)computerChoice="rock";
    else if(num==1)computerChoice="scissor";
    else computerChoice="paper";
    compDisplay.innerHTML=computerChoice;
 
}
function result(){
    if(userChoice==computerChoice)
        resultChoice=" Its a Draw"
    else if(userChoice=="rock" && computerChoice=="paper")
        resultChoice="paper wins !!"
    else if(userChoice=="rock" && computerChoice=="scissor")
        resultChoice="rock wins !!"
    else if(userChoice=="scissor" && computerChoice=="paper")
        resultChoice="scissor wins !!"
    resultDisplay.innerHTML=resultChoice
}

