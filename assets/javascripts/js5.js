// function function_name (argument) {   //
	// body...// 
//  TagName=document.getElementsByTagName('')   //
//  }   //

function doFirst (){
	barSize=600;
	svid=document.getElementById('samplevid');
	plB=document.getElementById('playButton');
	dB=document.getElementById('defaultBar');
	prB=document.getElementById('progressBar');

	plB.addEventListener('click', playOrPause, false);
	dB.addEventListener('click', clickedBar, false);

}

function playOrPause(){
	if(!svid.paused && !svid.ended){
		svid.pause();
		plB.innerHTML='Play';
		window.clearInterval(updateBar);
	}else{
		svid.play();
		plB.innerHTML='Pause';
		updateBar=setInterval(update, 500);
		}
}

function update(){
	if(!svid.ended){
		var current_size=parseInt(svid.currentTime*barSize/svid.duration);
		prB.style.width=current_size+'px';
	}else{
		prB.style.width='0px';
		plB.innerHTML='Play';
		window.clearInterval(updateBar);
	}
}

function clickedBar (e){
	if(!svid.paused && !svid.ended){
		var mouseX=e.pageX-dB.offsetLeft;
		var newtime=mouseX*svid.duration/barSize;
		svid.currentTime=newtime;
		prB.style.width=mouseX+'px';
	}
}

window.addEventListener('load', doFirst, false);


// 28-34  different way of setting up videos  //