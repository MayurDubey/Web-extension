var main_container = document.body;
var items          = document.getElementsByTagName("img",main_container);
var debuggericon   = document.getElementsByClassName("bug",document.body);
if (debuggericon.length > 0) {
	var debuggerr = debuggericon[0];
} else {
	var debuggerr = document.createElement("div");
	debuggerr.className += "bug";
	
	document.body.appendChild(debuggerr);
}
for (var i=0; i<items.length; i++) {
	items[i].addEventListener('mouseover', mouseover);
	items[i].addEventListener('mouseout', mouseout);
}
debuggerr.addEventListener('click', debugit);
function mouseover(){
	
	var a = this.offsetParent.offsetParent.offsetTop;
	var b = this.offsetParent.offsetParent.offsetLeft;
	var c = this.offsetWidth;
	var d = this.offsetHeight;
	var e = this.getAttribute("src");
	
	debuggerr = document.getElementsByClassName("bug",main_container)[0];
	debuggerr.style.top = a+(d)+200-window.scrollY+"px";
	debuggerr.style.left = b+(c)-150+"px";
	debuggerr.style.display = 'block';
	debuggerr.setAttribute("data-src",e);
};

function mouseout(event){
	this.style.border = "";
};

function debugit(){
	var a = this.getAttribute("data-src");
	window.open(a, '_blank');
};
