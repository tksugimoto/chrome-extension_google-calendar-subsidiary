"use strict";
document.body.addEventListener("wheel", evt => {
	const deltaY = evt.deltaY;
	if (deltaY === 0) return;

	const elem = evt.path.find(e => {
		return e.id === 'drawerMiniMonthNavigator';
	});
	if (!elem) return;

	evt.preventDefault();
	
	const targetSelector = `[aria-label="${deltaY > 0 ? "翌月" : "前月"}"]`;
	elem.querySelector(targetSelector).click();
});
