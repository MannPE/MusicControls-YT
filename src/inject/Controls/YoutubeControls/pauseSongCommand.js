import * as commons from '../commonCommands.js';

const playButtonClass = "ytp-play-button"

let playCMD = {
    help: "Simulate a keypress on the play/pause button from the videoplayer and return the current state of the video.",
    execute: (tab)=>{
        console.log("Pausing song");
        commons.emulateKeyPress(playButtonClass,tab,function(res){
            console.log("in pause:\n",res);
        });
    }
}

export const play = playCMD;