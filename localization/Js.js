function loadName(){
	var userName = localStorage.getItem('userName') || prompt("Your name") || "username";
	var myName = document.querySelector('.username');
	myName.innerHTML = userName;
}
function loadLanguage() {
	var defaultLanguage = "ua";
	var language = localStorage.getItem('language') || defaultLanguage;

	var $radio = document.querySelector('#languages input[data-language="' + language + '"]');
	$radio.checked = true;
	updateI18nTexts();
}
function saveName(userName){
	localStorage.setItem('userName', userName);
}
function saveLanguage(language) {
	localStorage.setItem('language', language);
	updateI18nTexts();
}

function updateI18nTexts() {
	var language = localStorage.getItem('language');
	document.body.setAttribute('data-current-language', language);
}

document.querySelector('#save').addEventListener('click', function (e){
	e.preventDefault();
	var language = document.querySelector("#languages input:checked").getAttribute('data-language');
	var userName = document.querySelector(".username").innerHTML;
	saveLanguage(language);
	saveName(userName);
});
loadName();
loadLanguage();
