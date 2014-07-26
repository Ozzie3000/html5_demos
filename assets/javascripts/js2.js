function getpisces () {
	//  document.querySelector('#tuna')  //this will target first one it finds  //
	// querySelectorAll looks for all  //
	var list1 = document.querySelectorAll('#tuna');
	list1[0].onclick=popup1;    // an array [n] = index  //
}
function popup1 () {
	alert('Chicken of the Sea!!!');
}

function getbovinae () {
  var list2 = document.querySelectorAll('#beef');
//	for (var i = Things.length - 1; i >= 0; i--) {  //
//	    	Things[i]   //
//	    };    //
	  for (var i = list2.length - 1; i >= 0; i--) {
	   	list2[i].onclick=popup2;
	  };
}
function popup2 () {
	alert('Mooooooo!!!');
}

function getavilae () {
  var list3 = document.querySelectorAll('#chicken');
	  for (var i = 0; i < list3.length; i++) {
	   	list3[i].onclick=popup3;
	  };
}
function popup3 () {
	alert('Bok Bok!!!');
}



//  window.onload=getStuff; used only for 1 function   //

//  <body onload="getpisces(); getbovinae(); getavilae();">   obtrusive  //




function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(getpisces);
addLoadEvent(getbovinae);
addLoadEvent(getavilae);

addLoadEvent(function() {
    document.body.style.backgroundColor = '#EFDF95';
})


 //  26-   working with JS with building my own functions   //