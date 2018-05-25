class TabAnalyzer{
    constructor(){
        this.tabs = chrome.tabs.query({},function(tab){
            callback(tab);
        });
    }

    get youtubeTabs(){
        
    }

}