var navigatorMessageMap = {
	'mac': 'macos',
	'iphone': 'macos',
	'win': 'windows',
	'ubuntu': 'ubuntu',
	'lin' : 'linux'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap){
	key = key.toLowerCase();
	var version = navigatorMessageMap[key];
  
	if (platform.indexOf(key) >= 0){	
		var message = document.getElementsByClassName("download-message");
		for(var i = 0; i < message.length; i++) {
			if( version == message[i].getAttribute('data-version')){
				message[i].style.display = "inline";
			}
		}
	}
}