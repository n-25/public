
function runServerClock()
	{
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		seconds=((seconds < 10) ? "0" : "") + seconds;
		minutes=((minutes < 10) ? "0" : "") + minutes;
		ampm = (hours >= 12) ? "PM" : "AM";
		hours=(hours > 12) ? hours-12 : hours;
		hours=(hours == 0) ? 12 : hours;
		var clock = "PDT" + " " + hours + ":" + minutes + ":" + seconds+ " " + ampm;
		if(clock != document.getElementById('serverclock').innerHTML) document.getElementById('serverclock').innerHTML = clock;
		timer = setTimeout("runServerClock()",1000);
	}
	runServerClock();
