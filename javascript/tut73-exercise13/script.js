function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function

    let a=document.querySelector(".thumbnail").style.background-image ;
    a = thumbnail;

    let b=document.querySelector(".one");
    b.textContent=title;

    let c=document.querySelector(".two").firstChild;
    c.textContent=cName;
    
    let d=document.querySelector(".two").children[1];
    if(1<=(views/1000000)<=100){
        views=(views/1000000)+"M"
    }
    if(1<=(views/1000)<=100){
        views=(views/1000)+"K"
    }
    d.textContent=views



    let e=document.querySelector(".two").children[2];
    e.textContent=monthsOld

    let f=document.querySelector(".two").children[3];
    e.textContent=duration



    




}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")