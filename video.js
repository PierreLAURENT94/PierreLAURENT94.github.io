var video = document.getElementById('photo');
var playpause = document.getElementById('playpause');
var stop = document.getElementById('stop');
var fr = document.getElementById('fr');
var en = document.getElementById('en');
var videosource = document.getElementById('videosrc');


function PlayPauseVideo()
{
    if(video.paused || video.ended){
        video.play();
        playpause.src = "pause.png";
    }
    else{
        video.pause();
        playpause.src = "play.png";
    }
}

function StopVideo()
{
    /*video.pause();
    video.currentTime = 0;*/
    playpause.src = "play.png";
    video.load(); // afin de revenir au poster
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

playpause.addEventListener('click', PlayPauseVideo);
stop.addEventListener('click', StopVideo);
fr.addEventListener('click', FrVideo);
en.addEventListener('click', EnVideo);