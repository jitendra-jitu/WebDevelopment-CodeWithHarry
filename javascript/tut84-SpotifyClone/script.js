async function getsongs() {
    let a= await fetch("http://127.0.0.1:3000/songs");
    let response=await a.text();
    // console.log(response)

    

    let div=document.createElement("div");
    div.innerHTML=response
    s=div.getElementsByTagName("a");
    songs=[]

    for (let index = 1; index < s.length; index++) {
        const element = s[index];
        songs.push(element.href.split("/songs/")[1])
    }
    return songs;
}


//Song-Slot to update
let currentsong=new Audio();

const playMusic=(track)=>{
    // let audio=new Audio("/songs/"+track);
    currentsong.src="/songs/"+track;
    currentsong.play();
}


async function main() {

    

    //listing the songs
    let songs= await getsongs();
    console.log(songs);

    let songsUl=document.querySelector(".songs-list").getElementsByTagName("ul")[0];

    for (const song of songs) {
        songsUl.innerHTML=songsUl.innerHTML+`<li>
                            <img  src="music.svg" alt="" srcset="">
                            <div class="info">
                                <div>${song.replaceAll("%20"," ")}</div>
                                <div>Jitu</div>
                            </div>
                            <div class="playnow">
                                <span>playnow</span>
                                <img class="invert" src="playbtn.svg" alt="">
                            </div>
                        </li>`;
    }

    // //play the first song 
    // var audio=new Audio(songs[1]);
    // // audio.play();

    // audio.addEventListener("loadeddata",()=>{
    //     console.log(audio.duration,audio.currentSrc,audio.currentTime)
    // })


    // Attach EventListener to each song 
    Array.from(document.querySelector(".songs-list").getElementsByTagName("li")).forEach(e=>[

        e.addEventListener("click",element=>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        })

    ])

    
    
    // Attach EventListener to play,next,previous
    play.addEventListener("click",()=>{
        if(currentsong.paused){
            currentsong.play();
            play.src="pause.svg";
        }
        else{
            currentsong.pause();
            play.src="playbtn.svg";
        }
    })





    



}

main();    

