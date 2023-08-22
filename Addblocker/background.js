const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
    "*://*.exness.com/*",
    "*://*.exness.com/hi/*",
    "*://*.1x-bet.in/*",
    "*://*.p2pb2b.com/*",
    "*://*.mychecklist4u.com/*",
    "*://*.in.1xbet.com//*"
    
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        return {cancel:true}},
        {urls:defaultFilters},
        ["blocking"]
    
)