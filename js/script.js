let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let gameOver=false;
let c=0;


let turnO =true;//player1 

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    c=0;
    gameOver=false;
    enableboxes();
    msgContainer.classList.add("hide");

}
const increamentCount=()=>{
    c++;
    if(c==9 && !gameOver){
        noWinner();
    }

}

boxes.forEach ((box) =>{
    box.addEventListener("click",()=>{

        // increamentCount();

        console.log("box was click");

        // box.innerHTML="AbcD";

        if(turnO){
            box.innerHTML="0";
            turnO=false;
        }else{
            box.innerHTML="X";
            turnO=true; 
        }

        box.disabled=true;

        // c++;

        checkWinner();

       increamentCount();

    })
})

const enableboxes=()=>{

    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }

}

const disableboxes=()=>{

    for(let box of boxes){
        box.disabled=true;
    }

}

const showWinner=(winner)=>{

    msg.innerText=`Congratulation, winner is ${winner}`;

    msgContainer.classList.remove("hide");

    gameOver=true;

    disableboxes();

}

const checkWinner =() =>{

    for(let pattern of winPattern ){

        // console.log(pattern[0],pattern[1],pattern[2]);

        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;

        if(pos1!="" && pos2!="" && pos3!=""){

            if(pos1==pos2 && pos2==pos3){

                console.log("winnner",pos1);

                showWinner(pos1);

            }
        }

    }
}

const noWinner=()=>{

    msg.innerText=`Try Again! Match tied`;

    msgContainer.classList.remove("hide");

    // disableboxes();

}

newGameBtn.addEventListener("click",resetGame);

reset.addEventListener("click",resetGame);

// boxes.addEventListener("click",incrementCount);