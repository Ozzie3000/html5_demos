function getStuff () {
	//  document.querySelector('#tuna')  //this will target first one it finds  //
	var list = document.querySelectorAll('#tuna');
	list[1].onclick=popup;    // an array [n] = index  //
}
function popup () {
	alert('Chicken of the Sea!!!');
}
// next you must call it when you load document  //
window.onload=getStuff;

 //  26-   working with JS with building my own functions   //