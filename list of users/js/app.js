function addEmployee() {
	var firstName = document.querySelector("#firstName").value;
	var lastName = document.querySelector("#lastName").value;
	var salary = document.querySelector("#salary").value;
	var position = document.querySelector("#position").value;
	var limit = document.querySelector("#limit").value;
	var limitAvgSalary = document.querySelector("#limitAvgSalary").value;
	var button = document.querySelector("#addEmployee");
	var LIMIT_TEXT = "the limit of the number of employees was reached";
	var LIMIT_AVG_SALARY_TEXT = "the limit of the avg. salary was reached";
	var number = document.querySelector(".number");
	var resultSalary = document.querySelector(".salary");
	
	function addCheckEmployee(){
		function checkingFirstName(){
			var first = document.getElementsByClassName("employeeFirstName");
			var arrFirstName = new Array();
			for(var i=0; i<first.length; i++) {
				var firstText = first[i].innerHTML;
				arrFirstName.push(firstText);
			}
			var idx = arrFirstName.indexOf(firstName + " / ");
			return idx;	
		}

		function checkingLastName(){
			var last = document.getElementsByClassName("employeeLastName");
			var arrLastName = new Array();
			for(var i=0; i<last.length; i++) {
				var lastText = last[i].innerHTML;
				arrLastName.push(lastText);
			}
			var idx = arrLastName.indexOf(lastName + " / ");
			return idx;	
		}

		function avgSalary(){
			var salaries = document.getElementsByClassName("employeeSalary");
			var arrSalary = new Array();
			for(var i=0; i<salaries.length; i++) {
				var salariesText = salaries[i].innerHTML;
				arrSalary.push(parseInt(salariesText));
			}
			var avg = arrSalary.reduce(function(previousValue, currentValue) {
  			return previousValue + currentValue;
			},0);
			var avgSalary = avg / salaries.length;
			return (avgSalary.toFixed(0))
		}
		var newUl = document.querySelector('.employeeList');
		var newLi = document.createElement('li');
		var newSpan1 = document.createElement('span');
		newSpan1.classList.add('employeeFirstName');
		if (firstName.match(/[a-zA-Z]/)){
			newSpan1.innerHTML = firstName + " / ";

			var newSpan2 = document.createElement('span');
			newSpan2.classList.add('employeeLastName');
			if (lastName.match(/[a-zA-Z]/)) {
				newSpan2.innerHTML = lastName + " / ";

			var newSpan3 = document.createElement('span');
			newSpan3.classList.add('employeeSalary');
			if (salary > 0){
				newSpan3.innerHTML = salary;
			var newSpan4 = document.createElement('span');
			newSpan4.classList.add('employeePosition');
			if (position.match(/[a-zA-Z]/)) {
			newSpan4.innerHTML = "$ / " + position ;
			var employees = document.getElementsByTagName('li');
			var employeesNumber = employees.length;
			if(employeesNumber < limit){				
				if((checkingFirstName() === -1 && checkingLastName() === -1) || (checkingFirstName() === -1 && checkingLastName() > -1) || (checkingFirstName() > -1 && checkingLastName() === -1)){
				
					newUl.appendChild(newLi);
					newLi.appendChild(newSpan1);
					newLi.appendChild(newSpan2);
					newLi.appendChild(newSpan3);
					newLi.appendChild(newSpan4);
			}else alert("An employee with that first name and last name already exists")		
			
			if (avgSalary () > limitAvgSalary){
        newUl.removeChild(newUl.lastChild);
        alert(LIMIT_AVG_SALARY_TEXT);
      }

			}else {alert(LIMIT_TEXT)}
			
				employeesNumber = employees.length;
				number.innerHTML = "Employees: " + employeesNumber;
				resultSalary.innerHTML = "Avg. salary: " + avgSalary () + ' $';
		}else alert("Incorrect! Try again");
		}else alert("Incorrect! Try again");
		}else alert("Incorrect! Try again");
		}else alert("Incorrect! Try again");

	}

	addCheckEmployee();
}
