function clickKey(buttonClass) {
    //You can play with your DOM here or check URL against your regex
    console.log('Tab script:');
    var button = document.getElementsByClassName(buttonClass)[0];
    console.log(button);
    button.click();
    setTimeout(null, 300);
    button = document.getElementsByClassName(buttonClass)[0]; // we do this again to get the updated button properties after clilcking
    return button.outerHTML;
}


function emulateKey(button, tab, callback){
	chrome.tabs.executeScript(tab.id,{
		code: '(' + clickKey + ')(\''+button +'\');' //argument here is a string but function.toString() returns function's code
	}, (results) => {
		//Here we have just the innerHTML and not DOM structure
        console.log("next Command successful\n",results[0]);
        callback(results[0]);
    });
};

function getPlayerInfo(tab, callback){
    chrome.tabs.executeScript(tab.id,{
        code: '(' + getElementOuterHtml + ')(\''+"movie_player" +'\');', //argument here is a string but function.toString() returns function's code
        runAt:'document_end'
	}, (results) => {
		//Here we have just the innerHTML and not DOM structure
        console.log("playerInfo:\n",results);
        callback(results);
    });
}

function getElementOuterHtml(id){
    var player = document.getElementById(id);
    return player.outerHTML;
}

function writeFile(){

}

export const emulateKeyPress = emulateKey;
export const write = writeFile;
export const getPlayer = getPlayerInfo;