import * as commons from '../commonCommands.js';

const playButtonClass = "ytp-play-button"
const playerPausedProperty = "ytp-autohide-active";
const playIcon = "../../icons/glyphicons/png/glyphicons-174-play.png"
const pauseIcon = "../../icons/glyphicons/png/glyphicons-175-pause.png"


function changeButton(buttonName){
    $('#pause-image').attr("src",buttonName);
}

let playCMD = {
    help: "Simulate a keypress on the play/pause button from the videoplayer and return the current state of the video.",
    execute: (tab)=>{
        console.log("Pausing/resuming song");
        commons.emulateKeyPress(playButtonClass,tab,function(res){
            console.log("in pause:\n",res);
        });
        commons.getPlayer(tab, function(player){
            var props = player[0].toString();
            if (props.includes(playerPausedProperty)){ // video got paused
                changeButton(pauseIcon);
            }
            else{ //video got resumed
                changeButton(playIcon);
            }
        });
    }
}

export const play = playCMD;