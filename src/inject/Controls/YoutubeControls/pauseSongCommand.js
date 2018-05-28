import * as commons from '../commonCommands.js';

const playButtonClass = "ytp-play-button"

let playCMD = {
    help: "Simulate a keypress on the play/pause button from the videoplayer and return the current state of the video.",
    execute: (tab)=>{
        console.log("Pausing/resuming song");
        commons.emulateKeyPress(playButtonClass,tab,function(res){
            console.log("in pause:\n",res);
        });
        commons.getPlayer(tab, function(player){
            var props = player[0].toString();
            if (props.includes("ytp-autohide-active")){
                console.log("VIDEO GOT PAUSED");
            }
            else{
                console.log("VIDEO RESUMED");
            }
        });
    }
}

export const play = playCMD;