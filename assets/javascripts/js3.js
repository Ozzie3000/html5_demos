function getPisces () {
	// querySelectorAll looks for all  //
	var list1 = document.querySelectorAll('#tuna');
	for (var i=0; i<list1.length; i++){
		list1[i].onclick=popup1;    // an array [i] = index  //
	}
}
function popup1 () {
	alert('Chicken of the Sea!!!');
}


window.onload=getPisces;



// target all #tuna s   //