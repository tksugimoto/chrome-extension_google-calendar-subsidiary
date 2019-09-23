const createContextMenus = () => {
	chrome.contextMenus.create({
		title: 'Googleカレンダーを開く',
		contexts: ['browser_action'],
		id: 'open_google_calendar',
	});
};

chrome.runtime.onInstalled.addListener(createContextMenus);
chrome.runtime.onStartup.addListener(createContextMenus);

const functions = {
	'open_google_calendar': () => {
		chrome.windows.create({
			url: 'https://calendar.google.com/',
			type: 'popup',
			state: 'maximized',
		});
	},
};
chrome.contextMenus.onClicked.addListener((info, tab) => {
	const fn = functions[info.menuItemId];
	if (fn) fn(info, tab);
});
