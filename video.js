var video = document.getElementById("photo");
var playpause = document.getElementById("playpause");
var stop = document.getElementById("stop");
var fr = document.getElementById("fr");
var en = document.getElementById("en");
var videosource = document.getElementById("videosrc");
var videoeencours = false;
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");

function PlayPauseVideo()
{
    if(video.paused || video.ended){
        video.play();
        playpause.src = "pause.png";
        videoeencours = true;
        SynchroniserTexte();
    }
    else{
        video.pause();
        playpause.src = "play.png";
        videoeencours = false;
    }
}

function StopVideo()
{
    /*video.pause();
    video.currentTime = 0;*/
    playpause.src = "play.png";
    video.load(); // afin de revenir au poster
    videoeencours = false;
    p1.style.border = "none";
    p2.style.border = "none";
    p3.style.border = "none";
    p4.style.border = "none";
    p5.style.border = "none";
}

function FrVideo()
{
    videosource.src = "cv_video_fr.mp4";
    StopVideo();
}

function EnVideo()
{
    videosource.src = "cv_video_en.mp4";
    StopVideo();
}

function SynchroniserTexte(){
    if(videoeencours){
        if(videosource.src.substring(videosource.src.lastIndexOf("/") + 1) == "cv_video_fr.mp4"){ //fr
            if(video.currentTime >= 4 && video.currentTime <= 18){
                p1.style.border = "8px dotted var(--couleur1)";
                p2.style.border = "none";
                p3.style.border = "none";
                p4.style.border = "none";
                p5.style.border = "none";
            }
            else if(video.currentTime >= 19 && video.currentTime <= 24){
                p1.style.border = "none";
                p2.style.border = "8px dotted var(--couleur1)";
                p3.style.border = "none";
                p4.style.border = "none";
                p5.style.border = "none";
            }
            else if(video.currentTime >= 25 && video.currentTime <= 32){
                p1.style.border = "none";
                p2.style.border = "none";
                p3.style.border = "8px dotted var(--couleur1)";
                p4.style.border = "none";
                p5.style.border = "none";
            }
            else if(video.currentTime >= 32 && video.currentTime <= 45){
                p1.style.border = "none";
                p2.style.border = "none";
                p3.style.border = "none";
                p4.style.border = "8px dotted var(--couleur1)";
                p5.style.border = "none";
            }
            else if(video.currentTime >= 46 && video.currentTime <= 49){
                p1.style.border = "none";
                p2.style.border = "none";
                p3.style.border = "none";
                p4.style.border = "none";
                p5.style.border = "8px dotted var(--couleur1)";
            }
            else{
                p1.style.border = "none";
                p2.style.border = "none";
                p3.style.border = "none";
                p4.style.border = "none";
                p5.style.border = "none";
            }
        }
        else{ //en
            if(video.currentTime >= 4 && video.currentTime <= 14){
                p1.style.border = "8px dotted var(--couleur1)";
                p2.style.border = "none";
                p3.style.border = "none";
                p4.style.border = "none";
                p5.style.border = "none";
            }
            else if(video.currentTime >= 15 && video.currentTime <= 20){
                p1.style.border = "none";
                p2.style.border = "8px dotted var(--couleur1)";
                p3.style.border = "none";
                p4.style.border = "none";
                p5.style.border = "none";
            }
            else if(video.currentTime >= 21 && video.currentTime <= 29){
                p1.style.border = "none";
                p2.style.border = "none";
                p3.style.border = "8px dotted var(--couleur1)";
                p4.style.border = "none";
                p5.style.border = "none";
            }
            else if(video.currentTime >= 30 && video.currentTime <= 41){
                p1.style.border = "none";
                p2.style.border = "none";
                p3.style.border = "none";
                p4.style.border = "8px dotted var(--couleur1)";
                p5.style.border = "none";
            }
            else if(video.currentTime >= 42 && video.currentTime <= 46){
                p1.style.border = "none";
                p2.style.border = "none";
                p3.style.border = "none";
                p4.style.border = "none";
                p5.style.border = "8px dotted var(--couleur1)";
            }
            else{
                p1.style.border = "none";
                p2.style.border = "none";
                p3.style.border = "none";
                p4.style.border = "none";
                p5.style.border = "none";
            }
        }
    }
    setTimeout(SynchroniserTexte, 250)
}

playpause.addEventListener("click", PlayPauseVideo);
stop.addEventListener("click", StopVideo);
fr.addEventListener("click", FrVideo);
en.addEventListener("click", EnVideo);
video.addEventListener("ended", StopVideo)