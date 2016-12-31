var x=20;
var y=20;
var xgl = 20;
var ygl =20;



function tegn(){
	canvas=document.getElementById("canvasTest"); //canvasTest 200x200px	
	ctx=canvas.getContext("2d");	
	canvasTest.width = canvasTest.width; //resetter canvas
	ctx.fillStyle="yellow";
	ctx.fillRect(0, 0, canvasTest.width, canvasTest.height);
}

function opdaterCanvas(){
	ctx.moveTo(xgl,ygl);
	ctx.lineTo(x,y);
	xgl =x;
	ygl =y;
	ctx.stroke();
}	

var watchID = null;

function onLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);

}

function onDeviceReady() {
	
	startWatch();
	//document.getElementById("data").innerHTML="start";
}

function startWatch() {
	var options = { frequency: 10 };
	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function stopWatch() {
	if (watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}

function onSuccess(acceleration) {
    var xAcc=acceleration.x;
	var yAcc = acceleration.y;
	document.getElementById("data").innerHTML= 'Acceleration X: ' + xAcc + '<br />' +
	'Acceleration Y: ' + yAcc + '<br />';
	if(xAcc<-2.5) flytH();
	if(xAcc>2) flytV();
	if(yAcc> 5) flytN();
	if(yAcc<-1) flytO();
}

function onError() {
	alert('onError!');
}


function testKey(e){
	var kode=e.keyCode;
	document.getElementById("data").innerHTML= kode; //udskriv kode
	if(kode==100) { //d
		flytH();
	}
	if(kode==115) { //s
		flytV();
	}	
}

function flytH(){
	x+=10; //flytter figuren TH
	opdaterCanvas()
}


function flytV(){
	x+=-10;
	opdaterCanvas()
}

function flytO(){
	y+=-10;
	opdaterCanvas()
}

function flytN(){
	y+=10;
	opdaterCanvas()
}

 





