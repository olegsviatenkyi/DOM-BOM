
var onClick = function (e) {
	var $el = e.target;
	$el.style.backgroundColor = 'yellow';
	alert('CLICK!');
	setTimeout(function(){
		$el.style.backgroundColor = '';
	}, 500)
}

document.body.onclick = onClick;
box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;

var stop = function(e){
	e.stopPropagation();
	alert("stopPropagation() зупиняє спливання події по DOM до батьківських елементів")
}
var prevent = function(e){
	e.preventDefault (e);
	alert("preventDefault() зупинить обробку події браузером за замовчуванням")
}

var classStop = document.querySelector('.stop');
var classPrevent = document.querySelector('.prevent');
classStop.addEventListener("click", stop);
classPrevent.addEventListener("click", prevent);
