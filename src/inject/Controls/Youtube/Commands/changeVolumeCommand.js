import * as commons from '../../commons.js';

let changeVLM = {
    help: "Change the volume of the html5 player in youtube",
    execute: (tab, volumeLevel)=>{
        volumeLevel = volumeLevel/100;
        console.log("Changing volume to"+volumeLevel);
        chrome.tabs.executeScript(tab.id,{
            code: 'document.getElementsByClassName("html5-main-video")[0].volume='+volumeLevel+';' 
        }, (results) => {
            
        });
    }
}

export const changeVolume = changeVLM;