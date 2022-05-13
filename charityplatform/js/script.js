$(document).ready(function(){
				$('.menu-toggle').click(function(){
					$('nav ul').slideToggle('400');
					$('.menu-toggle').toggleClass('active')

				})
			})


function loadDoc(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.state == 200) {
			document.getElementById('demo').innerHTML = this.responseText;
		}
	}
	xhttp.open("GET","ajax_info.txt",true);
	xhttp.send();
}

function loadDoc(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.state == 200) {
			document.getElementById("demo").innerHTML = this.responseText;
		}
	}
	xhttp.open("GET","LINK",true);
	xhttp.send();
}

function myFunction(xml,i){
	var xmlDoc = xml.responseXML;
	x = xmlDoc.getElementByTagName("CD");
	document.getElementById("showCD").innerHTML="Artist:" + 
	x[i].getElementByTagName("ARTIST")[0].childNodes[0].nodeValue +
	"<br> Title: " +
	x[i].getElementByTagName("TITLE")[0].childNodes.nodeValue 
}