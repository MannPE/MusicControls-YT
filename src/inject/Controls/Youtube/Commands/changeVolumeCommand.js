import * as commons from '../../commons.js';
import * as youtube from '../youtubeManager.js'

let changeVLM = {
    help: "Change the volume of the html5 player in youtube",
    execute: (tab, volumeLevel)=>{
        let volume = youtube.getVideoVolume();
        volumeLevel = volumeLevel/100;
        console.log("Changing volume to"+volumeLevel);
        chrome.tabs.executeScript(tab.id,{
            code: 'document.getElementsByClassName("html5-main-video")[0].volume='+volumeLevel+';' 
        }, (results) => {
            
        });
    }
}

export const changeVolume = changeVLM;