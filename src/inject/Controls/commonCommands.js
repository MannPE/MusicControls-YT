function clickKey(buttonClass) {
    //You can play with your DOM here or check URL against your regex
    console.log('Tab script:');
    var button = document.getElementsByClassName(buttonClass)[0];
    console.log(button);
    button.click();
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

function writeFile(){

}

export const emulateKeyPress = emulateKey;
export const write = writeFile;