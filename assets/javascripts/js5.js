function function_name (argument) {
	// body...
	TagName=document.getElementsByTagName('')
}

function doFirst (){
	barSize=600;
	svid=document.getElementsById('samplevid');
	plB=document.getElementsById('playButton');
	dB=document.getElementsById('defaultBar');
	prB=document.getElementsById('progressBar');

	playButton.addEventListener('click','playOrPause','false');
	defaultBar.addEventListener('click','clickedBar','false');

}

function playOrPause(){
	if(!svid.paused && !svid.ended){
		svid.pause();
		plB.innerHTML='Play';
		window.clearInterval(updateBar);
	}else{
		svid.play();
		plB.innerHTML='Pause';
		updateBar=setInterval( , )
	
	}
}