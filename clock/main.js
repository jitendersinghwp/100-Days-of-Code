var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

window.setInterval(function(){
	var d  = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var hRotation = 30*hours + minutes/2;
	var mRotation = 6*minutes;
	var sRotation = 6*seconds;

	hour.style.transform = 'rotate('+ hRotation +'deg)';
	minute.style.transform = 'rotate('+ mRotation +'deg)';
	second.style.transform = 'rotate('+ sRotation +'deg)';

}, 1000);