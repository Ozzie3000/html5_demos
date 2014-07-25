function getStuff () {
	//  document.querySelector('#tuna')  //this will target first one it finds  //
	document.querySelector('#tuna').onclick=talk;
}
function talk () {
	alert('Chicken of the Sea!!!');
}
// next you must call it when you load document  //
window.onload=getStuff;

 //  25-   working with JS with building my own functions   //