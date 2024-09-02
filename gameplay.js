function genCompchoice()
{
    const options=["rock","paper","scissors"];
    let i=Math.floor(Math.random()*3);
    return options[i];
    

}
let usercount=0;
let compcount=0;
let result=document.getElementById("outcome");
let userscore=document.getElementById("usercount");
let compscore=document.getElementById("compcount");
let board=document.getElementById("resultdisplay");
function game(userchoice)
{
    console.log("user choice:",userchoice);
    let compchoice=genCompchoice();
    console.log("comp choice:", compchoice);
    if(userchoice===compchoice)
    {
        result.innerText="Draw Match";
        board.style.backgroundColor="rgb(234, 95, 211)";

    }
    else if((userchoice==="rock"&&compchoice==="scissors")||(userchoice==="paper"&&compchoice==="rock")||(userchoice==="scissors"&&compchoice==="paper"))
    {
        usercount+=1;
        userscore.innerText=usercount;
        result.innerText="User gets the point";
        board.style.backgroundColor="green";
    }
    else
    {
        compcount+=1;
        compscore.innerText=compcount;
        result.innerText="Bot gets the point";
        board.style.backgroundColor="red";
    }
}
let choices=document.querySelectorAll(".gameimg");
choices.forEach((gameimg)=>{
    gameimg.addEventListener("click",()=>{
        let userchoice=gameimg.getAttribute("id");
        game(userchoice);
    });
});
