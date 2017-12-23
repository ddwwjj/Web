(function() {
'use strict';
var key ='AIzaSyC_s3rpJbmJmq-0qUBsrlrA3GkprchtWkk';  


document.addEventListener('DOMContentLoaded', function(){
	var currentTime = document.getElementById('current-time'),
		currentDate = document.getElementById('current-date');
	
	setInterval(function() {
		var d = new Date();
	
		var hours = d.getHours(),
			minutes = d.getMinutes(),
			month = formatMonth(d.getMonth()),
			date = d.getDate(),
			ampm = 'AM';
			
		if (hours > 12) {
			hours -= 12;
			ampm = 'PM';
		} else if (hours === 0) {
			hours = 12;
		}
		
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		
		var sepClass = '';
		if (d.getSeconds() % 2 === 1) sepClass = 'trans';
		
		var sep = '<span class="' + sepClass + '">:</span>';
	
		currentTime.innerHTML = hours + sep + minutes + ' ' + ampm;
		currentDate.textContent = month + ' ' + date;
	}, 1000);
	
	function formatMonth(m) {
		m = parseInt(m, 10);
	
		if (m < 0) {
			m = 0;
		} else if (m > 11) {
			m = 11;
		}
		
		/*
		var monthName;
		switch(m) {
			case 0 :
				monthName = "January";
				break;
			case 1 :
				monthName = "February";
				break;
			// and so on...
		}
		*/
	
		var monthNames = [
			'January', 'February', 'March',
			'April', 'May', 'June', 
			'July', 'August', 'September',
			'October', 'November', 'December'
		];
		
		return monthNames[m];
	}
    
    var map;
    var storedLocation = {lat: 34.0227992, lng: -118.2798382};
    map = new google.maps.Map(document.getElementById('address'), {
          'center': storedLocation,
          'zoom': 16,
    });
    
    var marker = new google.maps.Marker({
          'position': {lat: 34.0227992, lng: -118.2798382},
          'map': map,
          'title': 'University Gateway'
    });
    
    var popupInformation = "University Gateway";
    var infowindow = new google.maps.InfoWindow({
          content: popupInformation
    });
    
    marker.addListener('click', function() {
          infowindow.open(map, marker);
    });
    
});


})();