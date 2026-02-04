let plays=document.querySelectorAll(".play");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let messContainer=document.querySelector(".mess-container");
let msg=document.querySelector("#msg");

let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turn0=true;
    enablePlays();
    messContainer.classList.add("hide");
}
plays.forEach((play) => {
    play.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn0){
            play.innerText="0";
            turn0=false;
        }else{
            play.innerText="x";
            turn0=true;
        }
        play.disabled=true;
        checkWinner();
    });
});

const disablePlays =()=>{
    for(let play of plays){
         play.disabled=true;

    }
         
}
const enablePlays =()=>{
    for(let play of plays){
        play.enable=false;
        play.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    messContainer.classList.remove("hide");
    disablePlays();

}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=plays[pattern[0]].innerText;
        let pos2=plays[pattern[1]].innerText;
        let pos3=plays[pattern[2]].innerText;


        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winners",pos1);
                showWinner(pos1);
            }
        }

    }

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);