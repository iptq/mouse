document.onmousemove = function(event) {
	event = event || window.event;
	var x = event.clientX;
	var y = event.clientY;

	var w = window.innerWidth;
	var h = window.innerHeight;

	var el = document.getElementById("mouse");
	el.style.left = w - x;
	el.style.top = h - y;
};