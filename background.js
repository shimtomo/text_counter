let selectedTextLength = 0;

chrome.runtime.onInstalled.addListener(() => {
    // コンテキストメニューを追加（右クリック時に表示されるメニュー）
    chrome.contextMenus.create({
        id: "countText",
        title: "文字数をカウント",
        contexts: ["selection"]
    });
});

// コンテキストメニューの項目がクリックされたときのリスナー
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "countText") {
        const selectedText = info.selectionText;
        selectedTextLength = selectedText.length;
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getTextCount") {
        sendResponse(selectedTextLength);
    }
});

