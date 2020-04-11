function toggle2() {
	var ele = document.getElementById("data1");
	var text = document.getElementById("displayText2");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "+";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "-";
	}
} 
