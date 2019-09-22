var video = document.querySelector(".video");
var juice = document.querySelector(".orange-juice");
var btn = document.getElementById("play-pause");
currentTime = document.getElementById("current-time");
fullTime = document.getElementById("full-time");

function togglePlayPause()
{
    if(video.paused)
    {
        btn.className = "pause";
        video.play();
    }
    else
    {
        btn.className = "play";
        video.pause();
    }
}

btn.onclick = function() {
    togglePlayPause();
};

video.addEventListener("timeupdate", function(){
    var juicePos=video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    //*** mimdinare dro ***//
    liveTime = Math.floor(video.currentTime);
    liveTime = parseInt(liveTime / 60 , 10) + ":" + liveTime % 60;
    currentTime.innerHTML = liveTime + " /";
    //*** mtliani dro ****//
    fltm = Math.floor(video.duration);
    fltm = parseInt(fltm / 60 , 10) + ":" + fltm % 60;
    fullTime.innerHTML = fltm;
})