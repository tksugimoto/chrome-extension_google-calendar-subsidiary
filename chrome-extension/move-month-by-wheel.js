"use strict";
document.body.addEventListener("wheel", evt => {
	const deltaY = evt.deltaY;
	if (deltaY === 0) return;

	const elem = evt.path.find(e => {
		return e.classList && 
				e.classList.contains("monthtableSpace") && 
				e.closest(".dpi-popup");
	});
	if (!elem) return;

	evt.preventDefault();
	
	const targetSelector = `.dp-${deltaY > 0 ? "next" : "prev"}`;
	elem.querySelector(targetSelector).dispatchEvent(new Event("mousedown"));
});
