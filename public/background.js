chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({ url: chrome.extension.getURL('index.html') })
})

chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ url: chrome.extension.getURL('index.html') })
})