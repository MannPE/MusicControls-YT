(function() {
	console.log('inserted self... giggity');

})();

chrome.commands.onCommand.addListener(function(command) {
	console.log('Command: ', command);
	if(command=="toggle-play"){
		alert("lololol");
	}
});