function free() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "dobby1.jpg";
    } else {
        image.src = "dobby.gif";
    }
}

function dopisivanje() {
    var person = prompt("Misliš li da je Dobby dobar?", "da");
    
    if (person != "ne") {
        document.getElementById("demo").innerHTML =
        "Dobby has heard of your greatness, sir, but of your goodness, Dobby never knew...";
	}	
	 if (person != "da") {
        document.getElementById("demo").innerHTML =
        "Bad Dobby! Bad Dobby!";
    }
}


function dobby() {
	var prva= prompt ("Vilenjak", "Dobby")
	var druga= prompt ("Tvoje ime")
	alert(prva + " i " + druga + " mogu biti prijatelji " + Math.random()*100 + " % ");
}

