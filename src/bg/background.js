import {play as playCommand} from './../inject/Controls/Youtube/Commands/pauseSongCommand.js';

console.log("background loaded successfully");
//example of using a message handler from the inject scripts

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("shit sucks");
  });

chrome.browserAction.onClicked.addListener(function (tab) {
  // for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(tab.ib, {
    file: 'src/inject/chafis.js'
  });
});

var YTtabs= getYoutubeTabs(filterYoutubeTabs); 

chrome.commands.onCommand.addListener(function(command) {
	console.log('Command: ', command);
	if(command=="toggle-play"){
    getYoutubeTabs();
		playCommand.execute(YTtabs[0]);
	}
});

function getYoutubeTabs(callback){ //Take a callback
  chrome.tabs.query({},function(tab){
      return callback(tab); //call the callback with argument
  });
};

function filterYoutubeTabs(tabArray, callback){ // Gets all tabs that contain http://www.youtube.com
	var finalTabs = [];
	for (let i = 0; i < tabArray.length; i++) {
		const iteratedTab = tabArray[i];
		if(iteratedTab.url.indexOf("https://www.youtube.com")!=-1){
			finalTabs.push(iteratedTab);
		}
	}
	console.log("finals", finalTabs);	
	YTtabs = finalTabs;
}
