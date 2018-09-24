function _getVideoId(youtubeUrl){
	var res = youtubeUrl.split("v=")[1];
	var ampersandPosition = res.indexOf('&');
	if(ampersandPosition != -1) {
		res = res.substring(0, ampersandPosition);
	}
	console.log("new Video ID:",res);
	return res;
}

function _getVideoThumbnail(videoId){
	var res = "https://img.youtube.com/vi/"+videoId+"/0.jpg";
	return res;
}

function _getVideoTitle(tab){
    return tab.title;
}

function _getVideoVolume(tab){
	chrome.tabs.executeScript(tab.id,{
		code: 'console.log(document.getElementsByClassName("html5-main-video")[0].volume)' 
	}, (results) => {
		return results;
	});
}

function _getVideoPlayingStatus(tab, callback){
	chrome.tabs.executeScript(tab.id,{
		code: '(!document.getElementsByClassName("html5-main-video")[0].paused);' 
	}, (results) => {
		callback(results[0]);
	});
}

export const getVideoId = _getVideoId;
export const getVideoThumbnail = _getVideoThumbnail;
export const getVideoTitle = _getVideoTitle;
export const getVideoVolume = _getVideoVolume;
export const getVideoIsPlaying = _getVideoPlayingStatus;