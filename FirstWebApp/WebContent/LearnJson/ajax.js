function idVerification() {
	var xmlHttp;
	try {
		xmlHttp = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {

			try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {

				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	xmlHttp.onreadystatechange=function(){
		if(xmlHttp.readyState==4 && this.status==200){
			document.getElementById("idValidationMessage").innerHtml=xmlHttp.responseText;
		}
	}

xmlHttp.open("GET","register?userid="+document.getElementById("userid"),true);
xmlHttp.send(null);
}

