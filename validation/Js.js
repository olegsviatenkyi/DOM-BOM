var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
if (month < 10) month = '0' + month;
if (day < 10) day = '0' + day;
   			
var currentDate = (day + '/' + month + '/' + year);
var form = document.createElement("form");
form.name = "login";
form.action = "google.com"; 
var inputAge = document.createElement("input");
inputAge.type = "text";
inputAge.name = "age";
inputAge.value = "age";
		
var inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "username";
inputName.value = "username";
var inputDate = document.createElement("input");
inputDate.type = "text";
inputDate.name = "date";
inputDate.value = "current date";
var inputButton = document.createElement("input");
inputButton.type = "submit";
inputButton.value = "Validate Me";
		
inputButton.addEventListener('click', function(event){
	if (!inputAge.value.match(/^\d/) || inputAge.value.match(/[a-zA-Z]/) || inputAge.value < 0 || !inputName.value.match(/^user\_+.+/)){
		event.preventDefault();
		alert('Incorrect! Try again')
		return false;
	}
	if (inputDate.value !== currentDate){
		event.preventDefault();
		alert('Your data is invalid (format dd/mm/yyyy)')
		return false;
	}
		
	else {alert('success');
	return true;}

}, false);
form.appendChild(inputAge);
form.appendChild(inputName);
form.appendChild(inputDate);
form.appendChild(inputButton);
		
document.body.insertBefore(form, document.body.firstChild);
		