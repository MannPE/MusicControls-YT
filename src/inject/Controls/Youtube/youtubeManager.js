

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

function _getVideoVolumeLevel(tab){
	
}

export const getVideoId = _getVideoId;
export const getVideoThumbnail = _getVideoThumbnail;
export const getVideoTitle = _getVideoTitle;