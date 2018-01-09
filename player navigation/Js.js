document.getElementById('player').style.top = '100px';
  document.getElementById('player').style.left = '200px';


document.body.onkeydown = function (e) {
	var el = document.getElementById('player');
  
  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_UP = 38;
  var KEYCODE_DOWN = 40;
  var KEYCODE_SPACE = 32;
  var KEYCODE_ENTER = 13; 
  
  if (e.keyCode == KEYCODE_LEFT) {
    el.style.left = (parseInt(el.style.left) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
    el.style.left = (parseInt(el.style.left) + 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_UP) {
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_DOWN) {
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_SPACE) {
    var image = document.createElement("img");
    image.setAttribute("src", "fire.jpg");
    el.appendChild(image); 
    var sizeFire = 10;
    function fire1(){
      sizeFire = sizeFire + 10;
      image.style.width = sizeFire + 'px'; 
      if (sizeFire < 400) {
      
      setTimeout(fire1, 100); 
      }
       else el.removeChild(image);

    }
    fire1(); 
  }
  else if (e.keyCode == KEYCODE_ENTER) {
    var image = document.createElement("img");
    image.setAttribute("src", "fire1.jpg");
    el.appendChild(image); 
    var sizeFire = 10;
    function fire1(){
      sizeFire = sizeFire + 10;
      image.style.width = sizeFire + 'px'; 
      if (sizeFire < 400) {
      
      setTimeout(fire1, 100); 
      }
      else el.removeChild(image);
    }
    fire1(); 

  }
  
}