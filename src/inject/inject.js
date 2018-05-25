var YTtabs= getYoutubeTabs(filterYoutubeTabs); 
;

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
	console.log(YTtabs);
	_changeSong();
 } );

 function getYoutubeTabs(callback){ //Take a callback
    chrome.tabs.query({},function(tab){
        return callback(tab,_displayTab); //call the callback with argument
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
	return callback(finalTabs);
}

function _displayTab(tab){ //define your callback function
	document.getElementById("now-playing-header").innerHTML= tab[0].title;
    return (tab[0]);
 };


 function _changeSong(){
	chrome.tabs.sendMessage(YTtabs[0].id, {greeting: "hello"}, function(response) {
		console.log("LALALAL");
	});
	chrome.tabs.executeScript(YTtabs[0].id,{
		code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
	}, (results) => {
		//Here we have just the innerHTML and not DOM structure
		console.log(results[0]);
	});



		var greeting = "hola, ";
		console.log(YTtabs[0]);
		
	};

	function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
		console.log(document.body);
		var button = document.getElementsByClassName("ytp-next-button")[0];
		console.log(button);
		button.click();
        return document.body.innerHTML;
    }




 chrome.tabs.onUpdated.addListener(function() {
	var tabs = getYoutubeTabs(filterYoutubeTabs); 
  });

