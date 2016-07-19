$(document).ready(function(){
	//If user wants to end session
	$("#sign-out").click(function(){
		var exit = confirm("Are you sure you want to end the session?");
		if(exit==true){window.location = 'index.html?logout=true';}
	});
});
