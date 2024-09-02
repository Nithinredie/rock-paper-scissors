const details={
    "Nithin":"nithin@09",
    "Swathi":"swathi@11",
    "javascript":"html",
    123:"123"
    
}
function verifyDetails()
{
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let resultText=document.getElementById("result");
    let loc=document.getElementById("loc")
    if(details[username]===password)
    {
        resultText.innerText="Login Success!";
        resultText.style.color="green";
        // loc.setAttribute("href","game.html");
        // loc.click();
        location.href="game.html";

    }
    else
    {
        resultText.innerText="Login Failed!";
        resultText.style.color="red";
        document.getElementById("username").value='';
        document.getElementById("password").value='';
    }

}

history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    history.go(1);
};





