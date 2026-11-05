const homeScore=document.getElementById("home-score")
const awayScore=document.getElementById("away-score")
const onePointHomeBtn=document.querySelector(".one-home-btn")
const threePointHomeBtn=document.querySelector(".three-home-btn")
const fivePointHomeBtn=document.querySelector(".five-home-btn")
const resetBtn=document.querySelector(".reset-btn")
const onePointAwayBtn=document.querySelector(".one-away-btn")
const threePointAwayBtn=document.querySelector(".three-away-btn")
const fivePointAwayBtn=document.querySelector(".five-away-btn")

let counthome=0
onePointHomeBtn.onclick=()=>{
    counthome++
    homeScore.innerHTML=counthome
}
threePointHomeBtn.onclick=()=>{
    counthome+=3
    homeScore.innerHTML=counthome
}
fivePointHomeBtn.onclick=()=>{
    counthome+=5
    homeScore.innerHTML=counthome
}


let countaway=0
onePointAwayBtn.onclick=()=>{
    countaway++
    awayScore.innerHTML=countaway
}
threePointAwayBtn.onclick=()=>{
    countaway+=3
   awayScore.innerHTML=countaway
}
fivePointAwayBtn.onclick=()=>{
    countaway+=5
    awayScore.innerHTML=countaway
}

resetBtn.onclick=()=>{
    countaway=0
    awayScore.innerHTML=countaway
    counthome=0
    homeScore.innerHTML=counthome
}
