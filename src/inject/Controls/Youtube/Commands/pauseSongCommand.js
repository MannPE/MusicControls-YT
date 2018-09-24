import * as youtube from '../youtubeManager.js'

const playIcon = "play_arrow"
const pauseIcon = "pause"
const videoplayerClass= "html5-main-video";

var videoIsPlaying = true;


function changeButton(buttonName){
    $('#play-pause-icon').html(buttonName);
}

let playCMD = {
    help: "Simulate a keypress on the play/pause button from the videoplayer and return the current state of the video.",
    execute: (tab)=>{
        youtube.getVideoIsPlaying(tab,function(playing){
            videoIsPlaying = playing;
            if(videoIsPlaying){
                pause(tab);
                changeButton(playIcon);
            }else{
                resume(tab);
                changeButton(pauseIcon);
            }
        })
    }
}


function pause(tab){
    var vol = youtube.getVideoVolume(tab);
    console.log("volume", vol);
    console.log("Pausing song");
    chrome.tabs.executeScript(tab.id,{
        code: 'document.getElementsByClassName("html5-main-video")[0].pause();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log("pause command successful\n");
        videoIsPlaying=false;
    });
}

function resume(tab){
    console.log("Resuming song");
    chrome.tabs.executeScript(tab.id,{
        code: 'document.getElementsByClassName("html5-main-video")[0].play();' 
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log("resume command successful\n");
        videoIsPlaying=true;
    });
}

export const play = playCMD;