window.addEventListener('scroll', function (e) {
  	var text = document.getElementById('text');
  	var img = document.getElementById('img');
	var coords = text.getBoundingClientRect();
	var coordsImg = img.getBoundingClientRect();
	if(coordsImg.top>=150 && coordsImg.top<360.5){
		img.style.top = coordsImg.top + 0.25 + "px";
  	img.style.left = coordsImg.left + 1 + "px";
	}
	
  else if(coordsImg.left=850 && coordsImg.left>8){
  	img.style.left = coordsImg.left - 1 + "px";
	}
	
	else { 
		img.style.top = "173px";
		img.style.left = "100px";
	}
	console.log(coordsImg.top + " " + coordsImg.left )
})