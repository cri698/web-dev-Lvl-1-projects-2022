var myString = "hello how it going?";

	var myNumber = 300;

	var myBool = true;
	// Boolean(myBool);

	console.log("Testing this new shit rn!");

	function displayStringPoppup(){
		document.write(myString);

	}


	function displayNumberPoppup(){
		console.log(myNumber);
	}

	function displayBoolPoppup(){
		if (myBool == true){
			myBool = false;
		}
		console.log(myBool);
	}
	displayStringPoppup();
	displayNumberPoppup();
	displayBoolPoppup();


// function displayUserName(){
// 	//Do stuff
// 	var firstName = document.getElementById("firstName").value;
// 	var lastName = document.getElementById("lastName").value;

// 	window.alert("Your full name is: " + firstName + ' ' + lastName);


// }