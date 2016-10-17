"use strict";

function createContextMenus() {
	chrome.contextMenus.create({
		title: "Googleカレンダーを開く",
		contexts: ["browser_action"],
		id: "open-google-calendar"
	});
}

chrome.runtime.onInstalled.addListener(createContextMenus);
chrome.runtime.onStartup.addListener(createContextMenus);

var functions = {
	"open-google-calendar": () => {
		chrome.windows.create({
			url: "https://calendar.google.com/",
			type: "popup",
			state: "maximized"
		});
	}
};
chrome.contextMenus.onClicked.addListener((info, tab) => {
	var fn = functions[info.menuItemId];
	if (fn) fn(info, tab);
});