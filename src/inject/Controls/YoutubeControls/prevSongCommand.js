import * as commons from '../commonCommands.js';

const prevButtonClass = "ytp-next-button"

let backCMD = {
    help: "Go to the previous song - emulates a go back on the specific tab.",
    execute: (tab)=>{
        console.log("Changingsong");
        commons.emulateKeyPress(nextButtonClass,tab);
    }
}

export const back = backCMD;