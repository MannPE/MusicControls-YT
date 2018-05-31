import * as commons from '../../commons.js';

const prevButtonClass = "ytp-back-button"

let backCMD = {
    help: "Go to the previous song - goes back based on tab history if that tab is also a youtube video.",
    execute: (tab)=>{
        console.log("Changingsong");
        commons.emulateKeyPress(prevButtonClass,tab);
    }
}

export const back = backCMD;