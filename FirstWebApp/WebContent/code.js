function test1() {
	alert(num1 + num2);

}
function test2() {
	num1 = 4;
	alert(num1);
}
function test3() {
	num2 = 5;
	alert(num2);
}

function test4() {
	name1 = Array(12);
	name1[0] = "January";
	name1[1] = "February";
	name1[2] = "March";
	name1[3] = "April";
	name1[4] = "May";
	name1[5] = "June";
	name1[6] = "July";
	name1[7] = "August";
	name1[8] = "Sept";
	name1[9] = "Oct";
	name1[10] = "Nov";
	name1[11] = "Dec";
	n = document.Login.MyCode.value;
	switch (n) {
	case '1':
		alert(name1[0] + ":Winter");
		break;
	case '2':
		alert(name1[1] + ":Winter");
		break;
	case '3':
		alert(name1[2] + ":Spring");
		break;
	case '4':
		alert(name1[3] + ":Spring");
		break;
	case '5':
		alert(name1[4] + ":Summer");
		break;
	case '6':
		alert(name1[5] + ":summer");
		break;
	case '7':
		alert(name1[6] + ":Summer");
		break;
	case '8':
		alert(name1[7] + ":Monsoon");
		break;
	case '9':
		alert(name1[8] + ":Monsoon");
		break;
	case '10':
		alert(name1[9] + ":Winter");
		break;
	case '11':
		alert(name1[10] + ":Winter");
		break;
	case '12':
		alert(name1[11] + ":Winter");
	}

}
function testt() {
	for (var count1 = 1; count1 < 5; count1++) {
		for (var count2 = 1; count2 < 3; count2++) {
			document.write(count1 + " ");
		}
	}
}

function hello() {
	var name = Array(2);
	name[0] = 'AA';
	name[1] = 'BB';
	for (index in name) {
		alert(name[index]);

	}
}
function human() {
	var person = {
		fname : "John",
		lname : "Doe",
		age : 25
	};
	var text;
	for (x in person) {
		text = text + person[x];
	}
}
function roast() {

	/*var errorMsgDiv = document.getElementById("testing");*/
	/*errorMsgDiv.innerHTML=("<p> Season </p>");*/
	/*var paraUsingTagName=document.getElementsByTagName("p");
	paraUsingTagName.innerHTML=("Bye Everyone");*/
	
	var para=document.createElement("p");
	var node=document.createTextNode("This is new.");
	para.appendChild(node);
	var element=document.getElementById("p1");
	element.appendChild(para);
	
}
function displayPhone() {}
function Phone(make,model,year){
	this.make=make;
	this.model=model;
	this.year=year;
	this.displayPhone=function displayPhone() {
		var result="Phone:"+this.year+""+this.make+""+this.model;
			return result;
		
	}
}

function Model2(){
	var fone=new Phone("China","Gionee",2018);
	var result=fone.displayPhone();
	console.log(result);
}
function Model(){
	var myPhone=new Object();
	myPhone.make="China";
	myPhone["model"]="GioneeF103";
	myPhone.type="Smartphone"
	console.log(myPhone);
}
function Model1(){
	var myPhone1={make:"China",model:{model17:1,model18:2},year:2018};
	console.log(myPhone1);
}