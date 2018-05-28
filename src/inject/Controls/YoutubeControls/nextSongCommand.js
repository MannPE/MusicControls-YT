import * as commons from '../commonCommands.js';

const nextButtonClass = "ytp-next-button"

let nextCMD = {
    help: "Simulate a keypress on the next button from the videoplayer",
    execute: (tab)=>{
        console.log("Changingsong");
        commons.emulateKeyPress(nextButtonClass,tab);
    }
}

export const next = nextCMD;