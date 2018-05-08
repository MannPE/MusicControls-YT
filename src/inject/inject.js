chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});
$('.control-icon').click( function(e) {
	e.preventDefault();
	var tabs = getYoutubeTabs(_displayTab); 
	filterYoutubeTabs(tabs);
 } );

 function getYoutubeTabs(callback){ //Take a callback
    var theTab;
    chrome.tabs.query({},function(tab){
        callback(tab); //call the callback with argument
    });
};

function filterYoutubeTabs(tabArray){
	var finalTabs = [];
	for (let i = 0; i < tabArray.length; i++) {
		const iteratedTab = tabArray[i];
		if(iteratedTab.url.indexOf("https://www.youtube.com")!=-1){
			finalTabs.push(iteratedTab);
		}
	}
	console.log(finalTabs);	
}

function _displayTab(tab){ //define your callback function
    return (tab);
 };