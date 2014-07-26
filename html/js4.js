function getPisces () {
	// querySelectorAll looks for all  //
	var list1 = document.querySelectorAll('#.big_wrapper');
	for (var i=0; i<list1.length; i++){
		list1[i].onclick=popup1;    // an array [i] = index  //
	}
}
function popup1 () {
	alert('Chicken of the Sea!!!');
}


window.onload=getPisces;

// no tunas yet //



//  27 working with videos  //